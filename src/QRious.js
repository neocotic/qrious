/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const Alignment = require('./Alignment')
const CanvasRenderer = require('./renderer/CanvasRenderer')
const ElementServiceProvider = require('./service/element/ElementServiceProvider')
const ErrorCorrection = require('./ErrorCorrection')
const Galois = require('./Galois')
const ImageRenderer = require('./renderer/ImageRenderer')
const QRFrame = require('./QRFrame')
const Utilities = require('./util/Utilities')
const Version = require('./Version')

// *Badness* coefficients.
const N1 = 3
const N2 = 3
const N3 = 40
const N4 = 10

// Run lengths for badness.
var badBuffer = [];
// Data block.
var dataBlock;
// ECC data blocks and tables.
var eccBlock, neccBlock1, neccBlock2;
// ECC buffer.
var eccBuffer = [];
// ECC level (defaults to **L**).
var eccLevel = 1;
// Image buffer.
var frameBuffer = [];
// Fixed part of the image.
var frameMask = [];
// Generator polynomial.
var polynomial = [];
// Data input buffer.
var stringBuffer = [];
// Version for the data.
var version;
// Data width is based on `version`.
var width;

// Set bit to indicate cell in frame is immutable (symmetric around diagonal).
function setMask(x, y) {
  var bit;

  if (x > y) {
    bit = x;
    x   = y;
    y   = bit;
  }

  bit   = y;
  bit  *= y;
  bit  += y;
  bit >>= 1;
  bit  += x;

  frameMask[bit] = 1;
}

// Enter alignment pattern. Foreground colour to frame, background to mask. Frame will be merged
// with mask later.
function addAlignment(x, y) {
  var i;

  frameBuffer[x + width * y] = 1;

  for (i = -2; i < 2; i++) {
    frameBuffer[(x + i)     + width * (y - 2)]     = 1;
    frameBuffer[(x - 2)     + width * (y + i + 1)] = 1;
    frameBuffer[(x + 2)     + width * (y + i)]     = 1;
    frameBuffer[(x + i + 1) + width * (y + 2)]     = 1;
  }

  for (i = 0; i < 2; i++) {
    setMask(x - 1, y + i);
    setMask(x + 1, y - i);
    setMask(x - i, y - 1);
    setMask(x + i, y + 1);
  }
}

// Exponentiation mod N.
function modN(x) {
  while (x >= 255) {
    x -= 255;
    x  = (x >> 8) + (x & 255);
  }

  return x;
}

// Calculate and append `ecc` data to the `data` block. If block is in the string buffer the
// indices to buffers are used.
function appendData(data, dataLength, ecc, eccLength) {
  var bit, i, j;

  for (i = 0; i < eccLength; i++) {
    stringBuffer[ecc + i] = 0;
  }

  for (i = 0; i < dataLength; i++) {
    bit = Galois.LOG[stringBuffer[data + i] ^ stringBuffer[ecc]];

    if (bit !== 255) {
      for (j = 1; j < eccLength; j++) {
        stringBuffer[ecc + j - 1] = stringBuffer[ecc + j] ^
            Galois.EXPONENT[modN(bit + polynomial[eccLength - j])];
      }
    } else {
      for (j = ecc; j < ecc + eccLength; j++) {
        stringBuffer[j] = stringBuffer[j + 1];
      }
    }

    stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 :
        Galois.EXPONENT[modN(bit + polynomial[0])];
  }
}

// Check mask since symmetricals use half.
function isMasked(x, y) {
  var bit;

  if (x > y) {
    bit = x;
    x   = y;
    y   = bit;
  }

  bit   = y;
  bit  += y * y;
  bit >>= 1;
  bit  += x;

  return frameMask[bit] === 1;
}

// Apply the selected mask out of the 8 options.
function applyMask(mask) {
  var x, y, r3x, r3y;

  switch (mask) {
    case 0:
      for (y = 0; y < width; y++) {
        for (x = 0; x < width; x++) {
          if (!((x + y) & 1) && !isMasked(x, y)) {
            frameBuffer[x + y * width] ^= 1;
          }
        }
      }

      break;
    case 1:
      for (y = 0; y < width; y++) {
        for (x = 0; x < width; x++) {
          if (!(y & 1) && !isMasked(x, y)) {
            frameBuffer[x + y * width] ^= 1;
          }
        }
      }

      break;
    case 2:
      for (y = 0; y < width; y++) {
        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) r3x = 0;

          if (!r3x && !isMasked(x, y)) {
            frameBuffer[x + y * width] ^= 1;
          }
        }
      }

      break;
    case 3:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y === 3) r3y = 0;

        for (r3x = r3y, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) r3x = 0;

          if (!r3x && !isMasked(x, y)) {
            frameBuffer[x + y * width] ^= 1;
          }
        }
      }

      break;
    case 4:
      for (y = 0; y < width; y++) {
        for (r3x = 0, r3y = ((y >> 1) & 1), x = 0; x < width; x++, r3x++) {
          if (r3x === 3) {
            r3x = 0;
            r3y = !r3y;
          }

          if (!r3y && !isMasked(x, y)) {
            frameBuffer[x + y * width] ^= 1;
          }
        }
      }

      break;
    case 5:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y === 3) r3y = 0;

        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) r3x = 0;

          if (!((x & y & 1) + !(!r3x | !r3y)) && !isMasked(x, y)) {
            frameBuffer[x + y * width] ^= 1;
          }
        }
      }

      break;
    case 6:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y === 3) r3y = 0;

        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) r3x = 0;

          if (!(((x & y & 1) + (r3x && (r3x === r3y))) & 1) && !isMasked(x, y)) {
            frameBuffer[x + y * width] ^= 1;
          }
        }
      }

      break;
    case 7:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y === 3) r3y = 0;

        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) r3x = 0;

          if (!(((r3x && (r3x === r3y)) + ((x + y) & 1)) & 1) && !isMasked(x, y)) {
            frameBuffer[x + y * width] ^= 1;
          }
        }
      }

      break;
  }
}

// Using the table for the length of each run, calculate the amount of bad image. Long runs or
// those that look like finders are called twice; once for X and Y.
function getBadRuns(length) {
  var badRuns = 0;
  var i;

  for (i = 0; i <= length; i++) {
    if (badBuffer[i] >= 5) {
      badRuns += N1 + badBuffer[i] - 5;
    }
  }

  // FBFFFBF as in finder.
  for (i = 3; i < length - 1; i += 2) {
    if (badBuffer[i - 2] === badBuffer[i + 2] &&
        badBuffer[i + 2] === badBuffer[i - 1] &&
        badBuffer[i - 1] === badBuffer[i + 1] &&
        badBuffer[i - 1] * 3 === badBuffer[i] &&
        // Background around the foreground pattern? Not part of the specs.
        (badBuffer[i - 3] === 0 || i + 3 > length ||
         badBuffer[i - 3] * 3 >= badBuffer[i] * 4 ||
         badBuffer[i + 3] * 3 >= badBuffer[i] * 4)) {
      badRuns += N3;
    }
  }

  return badRuns;
}

// Calculate how bad the masked image is (e.g. blocks, imbalance, runs, or finders).
function checkBadness() {
  var b, b1, bad, big, bw, count, h, x, y;
  bad = bw = count = 0;

  // Blocks of same colour.
  for (y = 0; y < width - 1; y++) {
    for (x = 0; x < width - 1; x++) {
          // All foreground colour.
      if ((frameBuffer[x + width * y] &&
           frameBuffer[(x + 1) + width * y] &&
           frameBuffer[x + width * (y + 1)] &&
           frameBuffer[(x + 1) + width * (y + 1)]) ||
          // All background colour.
          !(frameBuffer[x + width * y] ||
            frameBuffer[(x + 1) + width * y] ||
            frameBuffer[x + width * (y + 1)] ||
            frameBuffer[(x + 1) + width * (y + 1)])) {
        bad += N2;
      }
    }
  }

  // X runs.
  for (y = 0; y < width; y++) {
    badBuffer[0] = 0;

    for (h = b = x = 0; x < width; x++) {
      if ((b1 = frameBuffer[x + width * y]) === b) {
        badBuffer[h]++;
      } else {
        badBuffer[++h] = 1;
      }

      b   = b1;
      bw += b ? 1 : -1;
    }

    bad += getBadRuns(h);
  }

  if (bw < 0) bw = -bw;

  big   = bw;
  big  += big << 2;
  big <<= 1;

  while (big > width * width) {
    big -= width * width;
    count++;
  }

  bad += count * N4;

  // Y runs.
  for (x = 0; x < width; x++) {
    badBuffer[0] = 0;

    for (h = b = y = 0; y < width; y++) {
      if ((b1 = frameBuffer[x + width * y]) === b) {
        badBuffer[h]++;
      } else {
        badBuffer[++h] = 1;
      }

      b = b1;
    }

    bad += getBadRuns(h);
  }

  return bad;
}

// Generate the encoded QR image for the string provided.
function generateFrame(str) {
  var i, j, k, m, t, v, x, y;

  // Find the smallest version that fits the string.
  t = str.length;

  version = 0;

  do {
    version++;

    k = (eccLevel - 1) * 4 + (version - 1) * 16;

    neccBlock1 = ErrorCorrection.BLOCKS[k++];
    neccBlock2 = ErrorCorrection.BLOCKS[k++];
    dataBlock  = ErrorCorrection.BLOCKS[k++];
    eccBlock   = ErrorCorrection.BLOCKS[k];

    k = dataBlock * (neccBlock1 + neccBlock2) + neccBlock2 - 3 + (version <= 9);

    if (t <= k) break;
  } while (version < 40);

  // FIXME: Ensure that it fits instead of being truncated.
  width = 17 + 4 * version;

  // Allocate, clear and setup data structures.
  v = dataBlock + (dataBlock + eccBlock) * (neccBlock1 + neccBlock2) + neccBlock2;

  for (t = 0; t < v; t++) {
    eccBuffer[t] = 0;
  }

  stringBuffer = str.slice(0);

  for (t = 0; t < width * width; t++) {
    frameBuffer[t] = 0;
  }

  for (t = 0; t < (width * (width + 1) + 1) / 2; t++) {
    frameMask[t] = 0;
  }

  // Insert finders: Foreground colour to frame and background to mask.
  for (t = 0; t < 3; t++) {
    k = y = 0;

    if (t === 1) k = (width - 7);
    if (t === 2) y = (width - 7);

    frameBuffer[(y + 3) + width * (k + 3)] = 1;

    for (x = 0; x < 6; x++) {
      frameBuffer[(y + x) + width * k] = 1;
      frameBuffer[y + width * (k + x + 1)] = 1;
      frameBuffer[(y + 6) + width * (k + x)] = 1;
      frameBuffer[(y + x + 1) + width * (k + 6)] = 1;
    }

    for (x = 1; x < 5; x++) {
      setMask(y + x, k + 1);
      setMask(y + 1, k + x + 1);
      setMask(y + 5, k + x);
      setMask(y + x + 1, k + 5);
    }

    for (x = 2; x < 4; x++) {
      frameBuffer[(y + x) + width * (k + 2)] = 1;
      frameBuffer[(y + 2) + width * (k + x + 1)] = 1;
      frameBuffer[(y + 4) + width * (k + x)] = 1;
      frameBuffer[(y + x + 1) + width * (k + 4)] = 1;
    }
  }

  // Alignment blocks.
  if (version > 1) {
    t = Alignment.BLOCK[version];
    y = width - 7;

    for (;;) {
      x = width - 7;

      while (x > t - 3) {
        addAlignment(x, y);

        if (x < t) break;

        x -= t;
      }

      if (y <= t + 9) break;

      y -= t;

      addAlignment(6, y);
      addAlignment(y, 6);
    }
  }

  // Single foreground cell.
  frameBuffer[8 + width * (width - 8)] = 1;

  // Timing gap (mask only).
  for (y = 0; y < 7; y++) {
    setMask(7, y);
    setMask(width - 8, y);
    setMask(7, y + width - 7);
  }

  for (x = 0; x < 8; x++) {
    setMask(x, 7);
    setMask(x + width - 8, 7);
    setMask(x, width - 8);
  }

  // Reserve mask, format area.
  for (x = 0; x < 9; x++) {
    setMask(x, 8);
  }

  for (x = 0; x < 8; x++) {
    setMask(x + width - 8, 8);
    setMask(8, x);
  }

  for (y = 0; y < 7; y++) {
    setMask(8, y + width - 7);
  }

  // Timing row/column.
  for (x = 0; x < width - 14; x++) {
    if (x & 1) {
      setMask(8 + x, 6);
      setMask(6, 8 + x);
    } else {
      frameBuffer[(8 + x) + width * 6] = 1;
      frameBuffer[6 + width * (8 + x)] = 1;
    }
  }

  // Version block.
  if (version > 6) {
    t = Version.BLOCK[version - 7];
    k = 17;

    for (x = 0; x < 6; x++) {
      for (y = 0; y < 3; y++, k--) {
        if (1 & (k > 11 ? version >> (k - 12) : t >> k)) {
          frameBuffer[(5 - x) + width * (2 - y + width - 11)] = 1;
          frameBuffer[(2 - y + width - 11) + width * (5 - x)] = 1;
        } else {
          setMask(5 - x, 2 - y + width - 11);
          setMask(2 - y + width - 11, 5 - x);
        }
      }
    }
  }

  // Sync mask bits. Only set above for background cells, so now add the foreground.
  for (y = 0; y < width; y++) {
    for (x = 0; x <= y; x++) {
      if (frameBuffer[x + width * y]) {
        setMask(x, y);
      }
    }
  }

  // Convert string to bit stream. 8-bit data to QR-coded 8-bit data (numeric, alphanum, or kanji
  // not supported).
  v = stringBuffer.length;

  // String to array.
  for (i = 0; i < v; i++) {
    eccBuffer[i] = stringBuffer.charCodeAt(i);
  }

  stringBuffer = eccBuffer.slice(0);

  // Calculate max string length.
  x = dataBlock * (neccBlock1 + neccBlock2) + neccBlock2;

  if (v >= x - 2) {
    v = x - 2;

    if (version > 9) v--;
  }

  // Shift and re-pack to insert length prefix.
  i = v;

  if (version > 9) {
    stringBuffer[i + 2] = 0;
    stringBuffer[i + 3] = 0;

    while (i--) {
      t = stringBuffer[i];

      stringBuffer[i + 3] |= 255 & (t << 4);
      stringBuffer[i + 2] = t >> 4;
    }

    stringBuffer[2] |= 255 & (v << 4);
    stringBuffer[1] = v >> 4;
    stringBuffer[0] = 0x40 | (v >> 12);
  } else {
    stringBuffer[i + 1] = 0;
    stringBuffer[i + 2] = 0;

    while (i--) {
      t = stringBuffer[i];

      stringBuffer[i + 2] |= 255 & (t << 4);
      stringBuffer[i + 1] = t >> 4;
    }

    stringBuffer[1] |= 255 & (v << 4);
    stringBuffer[0] = 0x40 | (v >> 4);
  }

  // Fill to end with pad pattern.
  i = v + 3 - (version < 10);

  while (i < x) {
    stringBuffer[i++] = 0xec;
    stringBuffer[i++] = 0x11;
  }

  // Calculate generator polynomial.
  polynomial[0] = 1;

  for (i = 0; i < eccBlock; i++) {
    polynomial[i + 1] = 1;

    for (j = i; j > 0; j--) {
      polynomial[j] = polynomial[j] ? polynomial[j - 1] ^
          Galois.EXPONENT[modN(Galois.LOG[polynomial[j]] + i)] : polynomial[j - 1];
    }

    polynomial[0] = Galois.EXPONENT[modN(Galois.LOG[polynomial[0]] + i)];
  }

  // Use logs for generator polynomial to save calculation step.
  for (i = 0; i <= eccBlock; i++) {
    polynomial[i] = Galois.LOG[polynomial[i]];
  }

  // Append ECC to data buffer.
  k = x;
  y = 0;

  for (i = 0; i < neccBlock1; i++) {
    appendData(y, dataBlock, k, eccBlock);

    y += dataBlock;
    k += eccBlock;
  }

  for (i = 0; i < neccBlock2; i++) {
    appendData(y, dataBlock + 1, k, eccBlock);

    y += dataBlock + 1;
    k += eccBlock;
  }

  // Interleave blocks.
  y = 0;

  for (i = 0; i < dataBlock; i++) {
    for (j = 0; j < neccBlock1; j++) {
      eccBuffer[y++] = stringBuffer[i + j * dataBlock];
    }

    for (j = 0; j < neccBlock2; j++) {
      eccBuffer[y++] = stringBuffer[(neccBlock1 * dataBlock) + i + (j * (dataBlock + 1))];
    }
  }

  for (j = 0; j < neccBlock2; j++) {
    eccBuffer[y++] = stringBuffer[(neccBlock1 * dataBlock) + i + (j * (dataBlock + 1))];
  }

  for (i = 0; i < eccBlock; i++) {
    for (j = 0; j < neccBlock1 + neccBlock2; j++) {
      eccBuffer[y++] = stringBuffer[x + i + j * eccBlock];
    }
  }

  stringBuffer = eccBuffer;

  // Pack bits into frame avoiding masked area.
  x = y = width - 1;
  k = v = 1;

  // Interleaved data and ECC codes.
  m = (dataBlock + eccBlock) * (neccBlock1 + neccBlock2) + neccBlock2;

  for (i = 0; i < m; i++) {
    t = stringBuffer[i];

    for (j = 0; j < 8; j++, t <<= 1) {
      if (0x80 & t) {
        frameBuffer[x + width * y] = 1;
      }

      // Find next fill position.
      do {
        if (v) {
          x--;
        } else {
          x++;

          if (k) {
            if (y !== 0) {
              y--;
            } else {
              x -= 2;
              k  = !k;

              if (x === 6) {
                x--;
                y = 9;
              }
            }
          } else {
            if (y !== width - 1) {
              y++;
            } else {
              x -= 2;
              k  = !k;

              if (x === 6) {
                x--;
                y -= 8;
              }
            }
          }
        }

        v = !v;
      } while (isMasked(x, y));
    }
  }

  // TODO: Continue from here!
  // Save pre-mask copy of frame.
  stringBuffer = frameBuffer.slice(0);

  t = 0;
  y = 30000;

  // Using `for` instead of `while` since in original Arduino code if an early mask was *good
  // enough* it wouldn't try for a better one since they get more complex and take longer.
  for (k = 0; k < 8; k++) {
    // Returns foreground-background imbalance.
    applyMask(k);

    x = checkBadness();

    // Is current mask better than previous best?
    if (x < y) {
      y = x;
      t = k;
    }

    // Don't increment `i` to a void redoing mask.
    if (t === 7) break;

    // Reset for next pass.
    frameBuffer = stringBuffer.slice(0);
  }

  // Redo best mask as none were *good enough* (i.e. last wasn't `t`).
  if (t !== k) {
    applyMask(t);
  }

  // Add in final mask/ECC level bytes.
  y = ErrorCorrection.FINAL_FORMAT[t + ((eccLevel - 1) << 3)];

  // Low byte.
  for (k = 0; k < 8; k++, y >>= 1) {
    if (y & 1) {
      frameBuffer[(width - 1 - k) + width * 8] = 1;

      if (k < 6) {
        frameBuffer[8 + width * k] = 1;
      } else {
        frameBuffer[8 + width * (k + 1)] = 1;
      }
    }
  }

  // High byte.
  for (k = 0; k < 7; k++, y >>= 1) {
    if (y & 1) {
      frameBuffer[8 + width * (width - 7 + k)] = 1;

      if (k) {
        frameBuffer[(6 - k) + width * 8] = 1;
      } else {
        frameBuffer[7 + width * 8] = 1;
      }
    }
  }

  // Finally, return the image data.
  return frameBuffer;
}

/**
 * TODO: Document
 *
 * @public
 */
class QRious {

  /**
   * Returns the default options for {@link QRious}.
   *
   * @return {QRious~Options} The default options.
   * @public
   * @static
   */
  static get DEFAULTS() {
    return {
      background: 'white',
      foreground: 'black',
      level: 'L',
      mime: 'image/png',
      size: 100,
      value: ''
    }
  }

  /**
   * Returns the current version of {@link QRious}.
   *
   * @return {String} The current version.
   * @public
   * @static
   */
  static get VERSION() {
    return '2.0.0'
  }

  /**
   * TODO: Document
   *
   * @param {QRious~Options} [options] -
   * @return {QRious~Options}
   * @private
   * @static
   */
  static _parseOptions(options) {
    options = Object.assign({}, QRious.DEFAULTS, options)
    options.level = options.level.toUpperCase()
    options.size = Math.abs(options.size)

    return options
  }

  /**
   * TODO: Document
   *
   * @param {QRious~Options} [options] -
   * @public
   */
  constructor(options) {
    options = QRious._parseOptions(options)

    Utilities.privatize(this, options)

    /**
     * TODO: Document
     *
     * @private
     * @type {ElementService}
     */
    this._elementService = new ElementServiceProvider().getService()

    /**
     * TODO: Document
     *
     * @public
     * @type {*}
     */
    this.canvas = this.element && this._elementService.isCanvas(this.element) ? this.element : this._elementService.createCanvas()

    /**
     * TODO: Document
     *
     * @public
     * @type {*}
     */
    this.image = this.element && this._elementService.isImage(this.element) ? this.element : this._elementService.createImage()

    /**
     * TODO: Document
     *
     * @private
     * @type {Renderer[]}
     */
    this._renderers = [
      new CanvasRenderer(this),
      new ImageRenderer(this)
    ]

    this.update()
  }

  /**
   * TODO: Document
   *
   * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
   *
   * @param {String} [mime] -
   * @return {String}
   * @public
   */
  toDataURL(mime) {
    return this.canvas.toDataURL(mime || this.mime)
  }

  /**
   * TODO: Document
   *
   * @protected
   */
  update() {
    const frame = new QRFrame({
      level: this.level,
      value: this.value
    })

    this._renderers.forEach((renderer) => renderer.render(frame))
  }

  /**
   * TODO: Document
   *
   * @return {String}
   * @public
   */
  get background() {
    return this._background
  }

  /**
   * TODO: Document
   *
   * @param {String} background -
   * @public
   */
  set background(background) {
    const changed = Utilities.setter(this, '_background', background, QRious.DEFAULTS.background)

    if (changed) {
      this.update()
    }
  }

  /**
   * TODO: Document
   *
   * @return {String}
   * @public
   */
  get foreground() {
    return this._foreground
  }

  /**
   * TODO: Document
   *
   * @param {String} foreground -
   * @public
   */
  set foreground(foreground) {
    const changed = Utilities.setter(this, '_foreground', foreground, QRious.DEFAULTS.foreground)

    if (changed) {
      this.update()
    }
  }

  /**
   * TODO: Document
   *
   * @return {String}
   * @public
   */
  get level() {
    return this._level
  }

  /**
   * TODO: Document
   *
   * @param {String} level -
   * @public
   */
  set level(level) {
    const changed = Utilities.setter(this, '_level', level, QRious.DEFAULTS.level, Utilities.toUpperCase)

    if (changed) {
      this.update()
    }
  }

  /**
   * TODO: Document
   *
   * @return {String}
   * @public
   */
  get mime() {
    return this._mime
  }

  /**
   * TODO: Document
   *
   * @param {String} mime -
   * @public
   */
  set mime(mime) {
    const changed = Utilities.setter(this, '_mime', mime, QRious.DEFAULTS.mime)

    if (changed) {
      this.update()
    }
  }

  /**
   * TODO: Document
   *
   * @return {Number}
   * @public
   */
  get size() {
    return this._size
  }

  /**
   * TODO: Document
   *
   * @param {Number} size -
   * @public
   */
  set size(size) {
    const changed = Utilities.setter(this, '_size', size, QRious.DEFAULTS.size, Math.abs)

    if (changed) {
      this.update()
    }
  }

  /**
   * TODO: Document
   *
   * @return {String}
   * @public
   */
  get value() {
    return this._value
  }

  /**
   * TODO: Document
   *
   * @param {String} value -
   * @public
   */
  set value(value) {
    const changed = Utilities.setter(this, '_value', value, QRious.DEFAULTS.value)

    if (changed) {
      this.update()
    }
  }
}

module.exports = QRious

/**
 * TODO: Document
 *
 * @typedef {Object} QRious~Options
 * @property {String} [background="white"] - The background color to be applied to the QR code.
 * @property {*} [element] - TODO: Document
 * @property {String} [foreground="black"] - The foreground color to be applied to the QR code.
 * @property {String} [level="L"] - The error correction level to be applied to the QR code.
 * @property {String} [mime="image/png"] - TODO: Document
 * @property {Number} [size=100] - The size of the QR code in pixels.
 * @property {String} [value=""] - The value to be encoded within the QR code.
 */
