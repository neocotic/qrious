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

const CanvasRenderer = require('./renderer/CanvasRenderer')
const ElementServiceProvider = require('./service/element/ElementServiceProvider')
const Frame = require('./Frame')
const ImageRenderer = require('./renderer/ImageRenderer')
const Utilities = require('./util/Utilities')

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
    const frame = new Frame({
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
