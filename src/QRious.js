/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
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

const CanvasRenderer = require('./renderer/CanvasRenderer')
const ElementServiceProvider = require('./service/element/ElementServiceProvider')
const Frame = require('./Frame')
const ImageRenderer = require('./renderer/ImageRenderer')
const Utilities = require('./util/Utilities')

/**
 * Enables configuration of a QR code generator which uses HTML5 <code>canvas</code> for rendering.
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
   * Parses the <code>options</code> provided so that the appropriate defaults and transformations are applied.
   *
   * @param {QRious~Options} [options] - the options to be parsed
   * @return {QRious~Options} The parsed options.
   * @private
   * @static
   */
  static _parseOptions(options) {
    options = Object.assign({}, QRious.DEFAULTS, options)
    options.level = Utilities.toUpperCase(options.level)
    options.size = Math.abs(options.size)

    return options
  }

  /**
   * Creates a new instance of {@link QRious} based on the <code>options</code> provided.
   *
   * @param {QRious~Options} [options] - the options to be used
   * @public
   */
  constructor(options) {
    options = QRious._parseOptions(options)

    Utilities.privatize(this, options)

    /**
     * The element service being used to create and inspect elements being to be used by this {@link QRious}.
     *
     * @private
     * @type {ElementService}
     */
    this._elementService = new ElementServiceProvider().getService()

    /**
     * The <code>canvas</code> being used to render the QR code for this {@link QRious}.
     *
     * @public
     * @type {*}
     */
    this.canvas = this._element && this._elementService.isCanvas(this._element) ? this._element : this._elementService.createCanvas()
    this.canvas.qrious = this

    /**
     * The <code>img</code> to contain the rendered QR code for this {@link QRious}.
     *
     * @public
     * @type {*}
     */
    this.image = this._element && this._elementService.isImage(this._element) ? this._element : this._elementService.createImage()
    this.image.qrious = this

    /**
     * A list of renderers being used to render the QR code for this {@link QRious}.
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
   * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
   *
   * @param {String} [mime] - the MIME type for the image
   * @return {String} The image data URI for the QR code.
   * @public
   */
  toDataURL(mime) {
    return this.canvas.toDataURL(mime || this.mime)
  }

  /**
   * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
   *
   * @protected
   */
  update() {
    const frame = new Frame({
      level: this.level,
      value: this.value
    })

    this._renderers.forEach((renderer) => renderer.render(frame))
  }

  /**
   * Returns the background color for the QR code.
   *
   * @return {String} The background color.
   * @public
   */
  get background() {
    return this._background
  }

  /**
   * Sets the background color for the QR code to <code>background</code>.
   *
   * @param {String} [background="white"] - the background color to be set
   * @public
   */
  set background(background) {
    const changed = Utilities.setter(this, '_background', background, QRious.DEFAULTS.background)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the foreground color for the QR code.
   *
   * @return {String} The foreground color.
   * @public
   */
  get foreground() {
    return this._foreground
  }

  /**
   * Sets the foreground color for the QR code to <code>foreground</code>.
   *
   * @param {String} [foreground="black"] - the foreground color to be set
   * @public
   */
  set foreground(foreground) {
    const changed = Utilities.setter(this, '_foreground', foreground, QRious.DEFAULTS.foreground)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the error correction level for the QR code.
   *
   * @return {String} The ECC level.
   * @public
   */
  get level() {
    return this._level
  }

  /**
   * Sets the error correction level for the QR code to <code>level</code>.
   *
   * <code>level</code> will be transformed to upper case to aid mapping to known ECC level blocks.
   *
   * @param {String} [level="L"] - the ECC level to be set
   * @public
   */
  set level(level) {
    const changed = Utilities.setter(this, '_level', level, QRious.DEFAULTS.level, Utilities.toUpperCase)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the MIME type for the image rendered for the QR code.
   *
   * @return {String} The image MIME type.
   * @public
   */
  get mime() {
    return this._mime
  }

  /**
   * Sets the MIME type for the image rendered for the QR code to <code>mime</code>.
   *
   * @param {String} [mime="image/png"] - the image MIME type to be set
   * @public
   */
  set mime(mime) {
    const changed = Utilities.setter(this, '_mime', mime, QRious.DEFAULTS.mime)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the size of the QR code.
   *
   * @return {Number} The size in pixels.
   * @public
   */
  get size() {
    return this._size
  }

  /**
   * Sets the size of the QR code to <code>size</code>.
   *
   * <code>size</code> will be transformed to ensure that it is always an absolute positive numbers (e.g.
   * <code>-100</code> would become <code>100</code>).
   *
   * @param {Number} [size=100] - the size in pixels to be set
   * @public
   */
  set size(size) {
    const changed = Utilities.setter(this, '_size', size, QRious.DEFAULTS.size, Math.abs)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the value of the QR code.
   *
   * @return {String} The value.
   * @public
   */
  get value() {
    return this._value
  }

  /**
   * Sets the value of the QR code to <code>value</code>.
   *
   * @param {String} [value=""] - the value to be set
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
 * The options used by {@link QRious}.
 *
 * @typedef {Object} QRious~Options
 * @property {String} [background="white"] - The background color to be applied to the QR code.
 * @property {*} [element] - The element to be used to render the QR code which may either be an <code>canvas</code> or
 * <code>img</code>. The element(s) will be created if needed.
 * @property {String} [foreground="black"] - The foreground color to be applied to the QR code.
 * @property {String} [level="L"] - The error correction level to be applied to the QR code.
 * @property {String} [mime="image/png"] - The MIME type to be used to render the image for the QR code.
 * @property {Number} [size=100] - The size of the QR code in pixels.
 * @property {String} [value=""] - The value to be encoded within the QR code.
 */
