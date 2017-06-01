/*
 * QRious
 * Copyright (C) 2017 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

var Nevis = require('nevis/lite');

var Alignment = require('./Alignment');
var ErrorCorrection = require('./ErrorCorrection');
var Galois = require('./Galois');
var Version = require('./Version');

/**
 * Generates information for a QR code frame based on a specific value to be encoded.
 *
 * @param {Frame~Options} options - the options to be used
 * @public
 * @class
 * @extends Nevis
 */
var Frame = Nevis.extend(function(options) {
  var dataBlock, eccBlock, index, neccBlock1, neccBlock2;
  var valueLength = options.value.length;

  this._badness = [];
  this._level = ErrorCorrection.LEVELS[options.level];
  this._polynomial = [];
  this._value = options.value;
  this._version = 0;
  this._stringBuffer = [];

  while (this._version < 40) {
    this._version++;

    index = ((this._level - 1) * 4) + ((this._version - 1) * 16);

    neccBlock1 = ErrorCorrection.BLOCKS[index++];
    neccBlock2 = ErrorCorrection.BLOCKS[index++];
    dataBlock = ErrorCorrection.BLOCKS[index++];
    eccBlock = ErrorCorrection.BLOCKS[index];

    index = (dataBlock * (neccBlock1 + neccBlock2)) + neccBlock2 - 3 + (this._version <= 9);

    if (valueLength <= index) {
      break;
    }
  }

  this._dataBlock = dataBlock;
  this._eccBlock = eccBlock;
  this._neccBlock1 = neccBlock1;
  this._neccBlock2 = neccBlock2;

  /**
   * The data width is based on version.
   *
   * @public
   * @type {number}
   * @memberof Frame#
   */
  // FIXME: Ensure that it fits instead of being truncated.
  var width = this.width = 17 + (4 * this._version);

  /**
   * The image buffer.
   *
   * @public
   * @type {number[]}
   * @memberof Frame#
   */
  this.buffer = Frame._createArray(width * width);

  this._ecc = Frame._createArray(dataBlock + ((dataBlock + eccBlock) * (neccBlock1 + neccBlock2)) + neccBlock2);
  this._mask = Frame._createArray(((width * (width + 1)) + 1) / 2);

  this._insertFinders();
  this._insertAlignments();

  // Insert single foreground cell.
  this.buffer[8 + (width * (width - 8))] = 1;

  this._insertTimingGap();
  this._reverseMask();
  this._insertTimingRowAndColumn();
  this._insertVersion();
  this._syncMask();
  this._convertBitStream(valueLength);
  this._calculatePolynomial();
  this._appendEccToData();
  this._interleaveBlocks();
  this._pack();
  this._finish();
}, {

  _addAlignment: function(x, y) {
    var i;
    var buffer = this.buffer;
    var width = this.width;

    buffer[x + (width * y)] = 1;

    for (i = -2; i < 2; i++) {
      buffer[x + i + (width * (y - 2))] = 1;
      buffer[x - 2 + (width * (y + i + 1))] = 1;
      buffer[x + 2 + (width * (y + i))] = 1;
      buffer[x + i + 1 + (width * (y + 2))] = 1;
    }

    for (i = 0; i < 2; i++) {
      this._setMask(x - 1, y + i);
      this._setMask(x + 1, y - i);
      this._setMask(x - i, y - 1);
      this._setMask(x + i, y + 1);
    }
  },

  _appendData: function(data, dataLength, ecc, eccLength) {
    var bit, i, j;
    var polynomial = this._polynomial;
    var stringBuffer = this._stringBuffer;

    for (i = 0; i < eccLength; i++) {
      stringBuffer[ecc + i] = 0;
    }

    for (i = 0; i < dataLength; i++) {
      bit = Galois.LOG[stringBuffer[data + i] ^ stringBuffer[ecc]];

      if (bit !== 255) {
        for (j = 1; j < eccLength; j++) {
          stringBuffer[ecc + j - 1] = stringBuffer[ecc + j] ^
            Galois.EXPONENT[Frame._modN(bit + polynomial[eccLength - j])];
        }
      } else {
        for (j = ecc; j < ecc + eccLength; j++) {
          stringBuffer[j] = stringBuffer[j + 1];
        }
      }

      stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 : Galois.EXPONENT[Frame._modN(bit + polynomial[0])];
    }
  },

  _appendEccToData: function() {
    var i;
    var data = 0;
    var dataBlock = this._dataBlock;
    var ecc = this._calculateMaxLength();
    var eccBlock = this._eccBlock;

    for (i = 0; i < this._neccBlock1; i++) {
      this._appendData(data, dataBlock, ecc, eccBlock);

      data += dataBlock;
      ecc += eccBlock;
    }

    for (i = 0; i < this._neccBlock2; i++) {
      this._appendData(data, dataBlock + 1, ecc, eccBlock);

      data += dataBlock + 1;
      ecc += eccBlock;
    }
  },

  _applyMask: function(mask) {
    var r3x, r3y, x, y;
    var buffer = this.buffer;
    var width = this.width;

    switch (mask) {
    case 0:
      for (y = 0; y < width; y++) {
        for (x = 0; x < width; x++) {
          if (!((x + y) & 1) && !this._isMasked(x, y)) {
            buffer[x + (y * width)] ^= 1;
          }
        }
      }

      break;
    case 1:
      for (y = 0; y < width; y++) {
        for (x = 0; x < width; x++) {
          if (!(y & 1) && !this._isMasked(x, y)) {
            buffer[x + (y * width)] ^= 1;
          }
        }
      }

      break;
    case 2:
      for (y = 0; y < width; y++) {
        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) {
            r3x = 0;
          }

          if (!r3x && !this._isMasked(x, y)) {
            buffer[x + (y * width)] ^= 1;
          }
        }
      }

      break;
    case 3:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y === 3) {
          r3y = 0;
        }

        for (r3x = r3y, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) {
            r3x = 0;
          }

          if (!r3x && !this._isMasked(x, y)) {
            buffer[x + (y * width)] ^= 1;
          }
        }
      }

      break;
    case 4:
      for (y = 0; y < width; y++) {
        for (r3x = 0, r3y = (y >> 1) & 1, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) {
            r3x = 0;
            r3y = !r3y;
          }

          if (!r3y && !this._isMasked(x, y)) {
            buffer[x + (y * width)] ^= 1;
          }
        }
      }

      break;
    case 5:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y === 3) {
          r3y = 0;
        }

        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) {
            r3x = 0;
          }

          if (!((x & y & 1) + !(!r3x | !r3y)) && !this._isMasked(x, y)) {
            buffer[x + (y * width)] ^= 1;
          }
        }
      }

      break;
    case 6:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y === 3) {
          r3y = 0;
        }

        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) {
            r3x = 0;
          }

          if (!((x & y & 1) + (r3x && r3x === r3y) & 1) && !this._isMasked(x, y)) {
            buffer[x + (y * width)] ^= 1;
          }
        }
      }

      break;
    case 7:
      for (r3y = 0, y = 0; y < width; y++, r3y++) {
        if (r3y === 3) {
          r3y = 0;
        }

        for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x === 3) {
            r3x = 0;
          }

          if (!((r3x && r3x === r3y) + (x + y & 1) & 1) && !this._isMasked(x, y)) {
            buffer[x + (y * width)] ^= 1;
          }
        }
      }

      break;
    }
  },

  _calculateMaxLength: function() {
    return (this._dataBlock * (this._neccBlock1 + this._neccBlock2)) + this._neccBlock2;
  },

  _calculatePolynomial: function() {
    var i, j;
    var eccBlock = this._eccBlock;
    var polynomial = this._polynomial;

    polynomial[0] = 1;

    for (i = 0; i < eccBlock; i++) {
      polynomial[i + 1] = 1;

      for (j = i; j > 0; j--) {
        polynomial[j] = polynomial[j] ? polynomial[j - 1] ^
          Galois.EXPONENT[Frame._modN(Galois.LOG[polynomial[j]] + i)] : polynomial[j - 1];
      }

      polynomial[0] = Galois.EXPONENT[Frame._modN(Galois.LOG[polynomial[0]] + i)];
    }

    // Use logs for generator polynomial to save calculation step.
    for (i = 0; i <= eccBlock; i++) {
      polynomial[i] = Galois.LOG[polynomial[i]];
    }
  },

  _checkBadness: function() {
    var b, b1, h, x, y;
    var bad = 0;
    var badness = this._badness;
    var buffer = this.buffer;
    var width = this.width;

    // Blocks of same colour.
    for (y = 0; y < width - 1; y++) {
      for (x = 0; x < width - 1; x++) {
        // All foreground colour.
        if ((buffer[x + (width * y)] &&
          buffer[x + 1 + (width * y)] &&
          buffer[x + (width * (y + 1))] &&
          buffer[x + 1 + (width * (y + 1))]) ||
          // All background colour.
          !(buffer[x + (width * y)] ||
          buffer[x + 1 + (width * y)] ||
          buffer[x + (width * (y + 1))] ||
          buffer[x + 1 + (width * (y + 1))])) {
          bad += Frame.N2;
        }
      }
    }

    var bw = 0;

    // X runs.
    for (y = 0; y < width; y++) {
      h = 0;

      badness[0] = 0;

      for (b = 0, x = 0; x < width; x++) {
        b1 = buffer[x + (width * y)];

        if (b === b1) {
          badness[h]++;
        } else {
          badness[++h] = 1;
        }

        b = b1;
        bw += b ? 1 : -1;
      }

      bad += this._getBadness(h);
    }

    if (bw < 0) {
      bw = -bw;
    }

    var count = 0;
    var big = bw;
    big += big << 2;
    big <<= 1;

    while (big > width * width) {
      big -= width * width;
      count++;
    }

    bad += count * Frame.N4;

    // Y runs.
    for (x = 0; x < width; x++) {
      h = 0;

      badness[0] = 0;

      for (b = 0, y = 0; y < width; y++) {
        b1 = buffer[x + (width * y)];

        if (b === b1) {
          badness[h]++;
        } else {
          badness[++h] = 1;
        }

        b = b1;
      }

      bad += this._getBadness(h);
    }

    return bad;
  },

  _convertBitStream: function(length) {
    var bit, i;
    var ecc = this._ecc;
    var version = this._version;

    // Convert string to bit stream. 8-bit data to QR-coded 8-bit data (numeric, alphanumeric, or kanji not supported).
    for (i = 0; i < length; i++) {
      ecc[i] = this._value.charCodeAt(i);
    }

    var stringBuffer = this._stringBuffer = ecc.slice();
    var maxLength = this._calculateMaxLength();

    if (length >= maxLength - 2) {
      length = maxLength - 2;

      if (version > 9) {
        length--;
      }
    }

    // Shift and re-pack to insert length prefix.
    var index = length;

    if (version > 9) {
      stringBuffer[index + 2] = 0;
      stringBuffer[index + 3] = 0;

      while (index--) {
        bit = stringBuffer[index];

        stringBuffer[index + 3] |= 255 & (bit << 4);
        stringBuffer[index + 2] = bit >> 4;
      }

      stringBuffer[2] |= 255 & (length << 4);
      stringBuffer[1] = length >> 4;
      stringBuffer[0] = 0x40 | (length >> 12);
    } else {
      stringBuffer[index + 1] = 0;
      stringBuffer[index + 2] = 0;

      while (index--) {
        bit = stringBuffer[index];

        stringBuffer[index + 2] |= 255 & (bit << 4);
        stringBuffer[index + 1] = bit >> 4;
      }

      stringBuffer[1] |= 255 & (length << 4);
      stringBuffer[0] = 0x40 | (length >> 4);
    }

    // Fill to end with pad pattern.
    index = length + 3 - (version < 10);

    while (index < maxLength) {
      stringBuffer[index++] = 0xec;
      stringBuffer[index++] = 0x11;
    }
  },

  _getBadness: function(length) {
    var i;
    var badRuns = 0;
    var badness = this._badness;

    for (i = 0; i <= length; i++) {
      if (badness[i] >= 5) {
        badRuns += Frame.N1 + badness[i] - 5;
      }
    }

    // FBFFFBF as in finder.
    for (i = 3; i < length - 1; i += 2) {
      if (badness[i - 2] === badness[i + 2] &&
        badness[i + 2] === badness[i - 1] &&
        badness[i - 1] === badness[i + 1] &&
        badness[i - 1] * 3 === badness[i] &&
        // Background around the foreground pattern? Not part of the specs.
        (badness[i - 3] === 0 || i + 3 > length ||
        badness[i - 3] * 3 >= badness[i] * 4 ||
        badness[i + 3] * 3 >= badness[i] * 4)) {
        badRuns += Frame.N3;
      }
    }

    return badRuns;
  },

  _finish: function() {
    // Save pre-mask copy of frame.
    this._stringBuffer = this.buffer.slice();

    var currentMask, i;
    var bit = 0;
    var mask = 30000;

    /*
     * Using for instead of while since in original Arduino code if an early mask was "good enough" it wouldn't try for
     * a better one since they get more complex and take longer.
     */
    for (i = 0; i < 8; i++) {
      // Returns foreground-background imbalance.
      this._applyMask(i);

      currentMask = this._checkBadness();

      // Is current mask better than previous best?
      if (currentMask < mask) {
        mask = currentMask;
        bit = i;
      }

      // Don't increment "i" to a void redoing mask.
      if (bit === 7) {
        break;
      }

      // Reset for next pass.
      this.buffer = this._stringBuffer.slice();
    }

    // Redo best mask as none were "good enough" (i.e. last wasn't bit).
    if (bit !== i) {
      this._applyMask(bit);
    }

    // Add in final mask/ECC level bytes.
    mask = ErrorCorrection.FINAL_FORMAT[bit + (this._level - 1 << 3)];

    var buffer = this.buffer;
    var width = this.width;

    // Low byte.
    for (i = 0; i < 8; i++, mask >>= 1) {
      if (mask & 1) {
        buffer[width - 1 - i + (width * 8)] = 1;

        if (i < 6) {
          buffer[8 + (width * i)] = 1;
        } else {
          buffer[8 + (width * (i + 1))] = 1;
        }
      }
    }

    // High byte.
    for (i = 0; i < 7; i++, mask >>= 1) {
      if (mask & 1) {
        buffer[8 + (width * (width - 7 + i))] = 1;

        if (i) {
          buffer[6 - i + (width * 8)] = 1;
        } else {
          buffer[7 + (width * 8)] = 1;
        }
      }
    }
  },

  _interleaveBlocks: function() {
    var i, j;
    var dataBlock = this._dataBlock;
    var ecc = this._ecc;
    var eccBlock = this._eccBlock;
    var k = 0;
    var maxLength = this._calculateMaxLength();
    var neccBlock1 = this._neccBlock1;
    var neccBlock2 = this._neccBlock2;
    var stringBuffer = this._stringBuffer;

    for (i = 0; i < dataBlock; i++) {
      for (j = 0; j < neccBlock1; j++) {
        ecc[k++] = stringBuffer[i + (j * dataBlock)];
      }

      for (j = 0; j < neccBlock2; j++) {
        ecc[k++] = stringBuffer[(neccBlock1 * dataBlock) + i + (j * (dataBlock + 1))];
      }
    }

    for (j = 0; j < neccBlock2; j++) {
      ecc[k++] = stringBuffer[(neccBlock1 * dataBlock) + i + (j * (dataBlock + 1))];
    }

    for (i = 0; i < eccBlock; i++) {
      for (j = 0; j < neccBlock1 + neccBlock2; j++) {
        ecc[k++] = stringBuffer[maxLength + i + (j * eccBlock)];
      }
    }

    this._stringBuffer = ecc;
  },

  _insertAlignments: function() {
    var i, x, y;
    var version = this._version;
    var width = this.width;

    if (version > 1) {
      i = Alignment.BLOCK[version];
      y = width - 7;

      for (;;) {
        x = width - 7;

        while (x > i - 3) {
          this._addAlignment(x, y);

          if (x < i) {
            break;
          }

          x -= i;
        }

        if (y <= i + 9) {
          break;
        }

        y -= i;

        this._addAlignment(6, y);
        this._addAlignment(y, 6);
      }
    }
  },

  _insertFinders: function() {
    var i, j, x, y;
    var buffer = this.buffer;
    var width = this.width;

    for (i = 0; i < 3; i++) {
      j = 0;
      y = 0;

      if (i === 1) {
        j = width - 7;
      }
      if (i === 2) {
        y = width - 7;
      }

      buffer[y + 3 + (width * (j + 3))] = 1;

      for (x = 0; x < 6; x++) {
        buffer[y + x + (width * j)] = 1;
        buffer[y + (width * (j + x + 1))] = 1;
        buffer[y + 6 + (width * (j + x))] = 1;
        buffer[y + x + 1 + (width * (j + 6))] = 1;
      }

      for (x = 1; x < 5; x++) {
        this._setMask(y + x, j + 1);
        this._setMask(y + 1, j + x + 1);
        this._setMask(y + 5, j + x);
        this._setMask(y + x + 1, j + 5);
      }

      for (x = 2; x < 4; x++) {
        buffer[y + x + (width * (j + 2))] = 1;
        buffer[y + 2 + (width * (j + x + 1))] = 1;
        buffer[y + 4 + (width * (j + x))] = 1;
        buffer[y + x + 1 + (width * (j + 4))] = 1;
      }
    }
  },

  _insertTimingGap: function() {
    var x, y;
    var width = this.width;

    for (y = 0; y < 7; y++) {
      this._setMask(7, y);
      this._setMask(width - 8, y);
      this._setMask(7, y + width - 7);
    }

    for (x = 0; x < 8; x++) {
      this._setMask(x, 7);
      this._setMask(x + width - 8, 7);
      this._setMask(x, width - 8);
    }
  },

  _insertTimingRowAndColumn: function() {
    var x;
    var buffer = this.buffer;
    var width = this.width;

    for (x = 0; x < width - 14; x++) {
      if (x & 1) {
        this._setMask(8 + x, 6);
        this._setMask(6, 8 + x);
      } else {
        buffer[8 + x + (width * 6)] = 1;
        buffer[6 + (width * (8 + x))] = 1;
      }
    }
  },

  _insertVersion: function() {
    var i, j, x, y;
    var buffer = this.buffer;
    var version = this._version;
    var width = this.width;

    if (version > 6) {
      i = Version.BLOCK[version - 7];
      j = 17;

      for (x = 0; x < 6; x++) {
        for (y = 0; y < 3; y++, j--) {
          if (1 & (j > 11 ? version >> j - 12 : i >> j)) {
            buffer[5 - x + (width * (2 - y + width - 11))] = 1;
            buffer[2 - y + width - 11 + (width * (5 - x))] = 1;
          } else {
            this._setMask(5 - x, 2 - y + width - 11);
            this._setMask(2 - y + width - 11, 5 - x);
          }
        }
      }
    }
  },

  _isMasked: function(x, y) {
    var bit = Frame._getMaskBit(x, y);

    return this._mask[bit] === 1;
  },

  _pack: function() {
    var bit, i, j;
    var k = 1;
    var v = 1;
    var width = this.width;
    var x = width - 1;
    var y = width - 1;

    // Interleaved data and ECC codes.
    var length = ((this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2)) + this._neccBlock2;

    for (i = 0; i < length; i++) {
      bit = this._stringBuffer[i];

      for (j = 0; j < 8; j++, bit <<= 1) {
        if (0x80 & bit) {
          this.buffer[x + (width * y)] = 1;
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
                k = !k;

                if (x === 6) {
                  x--;
                  y = 9;
                }
              }
            } else if (y !== width - 1) {
              y++;
            } else {
              x -= 2;
              k = !k;

              if (x === 6) {
                x--;
                y -= 8;
              }
            }
          }

          v = !v;
        } while (this._isMasked(x, y));
      }
    }
  },

  _reverseMask: function() {
    var x, y;
    var width = this.width;

    for (x = 0; x < 9; x++) {
      this._setMask(x, 8);
    }

    for (x = 0; x < 8; x++) {
      this._setMask(x + width - 8, 8);
      this._setMask(8, x);
    }

    for (y = 0; y < 7; y++) {
      this._setMask(8, y + width - 7);
    }
  },

  _setMask: function(x, y) {
    var bit = Frame._getMaskBit(x, y);

    this._mask[bit] = 1;
  },

  _syncMask: function() {
    var x, y;
    var width = this.width;

    for (y = 0; y < width; y++) {
      for (x = 0; x <= y; x++) {
        if (this.buffer[x + (width * y)]) {
          this._setMask(x, y);
        }
      }
    }
  }

}, {

  _createArray: function(length) {
    var i;
    var array = [];

    for (i = 0; i < length; i++) {
      array[i] = 0;
    }

    return array;
  },

  _getMaskBit: function(x, y) {
    var bit;

    if (x > y) {
      bit = x;
      x = y;
      y = bit;
    }

    bit = y;
    bit += y * y;
    bit >>= 1;
    bit += x;

    return bit;
  },

  _modN: function(x) {
    while (x >= 255) {
      x -= 255;
      x = (x >> 8) + (x & 255);
    }

    return x;
  },

  // *Badness* coefficients.
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10

});

module.exports = Frame;

/**
 * The options used by {@link Frame}.
 *
 * @typedef {Object} Frame~Options
 * @property {string} level - The ECC level to be used.
 * @property {string} value - The value to be encoded.
 */
