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

import CanvasRenderer from './renderer/CanvasRenderer'
import Frame from './Frame'
import ImageRenderer from './renderer/ImageRenderer'
import ServiceManager from './service/ServiceManager'
import Utilities from './util/Utilities'

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
      backgroundAlpha: 1,
      foreground: 'black',
      foregroundAlpha: 1,
      level: 'L',
      mime: 'image/png',
      padding: null,
      size: 100,
      value: ''
    }
  }

  /**
   * Returns the current version of {@link QRious}.
   *
   * @return {string} The current version.
   * @public
   * @static
   */
  static get VERSION() {
    return '2.2.0'
  }

  /**
   * Configures the <code>service</code> provided to be used by all {@link QRious} instances.
   *
   * @param {Service} service - the {@link Service} to be configured
   * @return {void}
   * @throws {Error} If a {@link Service} has already been configured with the same name.
   * @public
   * @static
   */
  static use(service) {
    QRious._serviceManager.setService(service.getName(), service)
  }

  static _parseOptions(options) {
    options = Object.assign({}, QRious.DEFAULTS, options)
    options.backgroundAlpha = Utilities.abs(options.backgroundAlpha)
    options.foregroundAlpha = Utilities.abs(options.foregroundAlpha)
    options.level = Utilities.toUpperCase(options.level)
    options.padding = Utilities.abs(options.padding)
    options.size = Utilities.abs(options.size)

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

    const element = this._element
    const elementService = QRious._serviceManager.getService('element')

    /**
     * The <code>canvas</code> being used to render the QR code for this {@link QRious}.
     *
     * @public
     * @type {*}
     */
    this.canvas = element && elementService.isCanvas(element) ? element : elementService.createCanvas()
    this.canvas.qrious = this

    /**
     * The <code>img</code> to contain the rendered QR code for this {@link QRious}.
     *
     * @public
     * @type {*}
     */
    this.image = element && elementService.isImage(element) ? element : elementService.createImage()
    this.image.qrious = this

    this._renderers = [
      new CanvasRenderer(this),
      new ImageRenderer(this)
    ]

    this.update()
  }

  /**
   * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
   *
   * @param {string} [mime] - the MIME type for the image
   * @return {string} The image data URI for the QR code.
   * @public
   */
  toDataURL(mime) {
    return this.canvas.toDataURL(mime || this.mime)
  }

  /**
   * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
   *
   * @return {void}
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
   * @return {string} The background color.
   * @public
   */
  get background() {
    return this._background
  }

  /**
   * Sets the background color for the QR code to <code>background</code>.
   *
   * @param {string} [background="white"] - the background color to be set
   * @public
   */
  set background(background) {
    const changed = Utilities.setter(this, '_background', background, QRious.DEFAULTS.background)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the background alpha for the QR code.
   *
   * @return {number} The background alpha.
   * @public
   */
  get backgroundAlpha() {
    return this._backgroundAlpha
  }

  /**
   * Sets the background alpha for the QR code to <code>backgroundAlpha</code>.
   *
   * @param {number} [backgroundAlpha=1] - the background alpha to be set
   * @public
   */
  set backgroundAlpha(backgroundAlpha) {
    const changed = Utilities.setter(this, '_backgroundAlpha', backgroundAlpha, QRious.DEFAULTS.backgroundAlpha)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the foreground color for the QR code.
   *
   * @return {string} The foreground color.
   * @public
   */
  get foreground() {
    return this._foreground
  }

  /**
   * Sets the foreground color for the QR code to <code>foreground</code>.
   *
   * @param {string} [foreground="black"] - the foreground color to be set
   * @public
   */
  set foreground(foreground) {
    const changed = Utilities.setter(this, '_foreground', foreground, QRious.DEFAULTS.foreground)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the foreground alpha for the QR code.
   *
   * @return {number} The foreground alpha.
   * @public
   */
  get foregroundAlpha() {
    return this._foregroundAlpha
  }

  /**
   * Sets the foreground alpha for the QR code to <code>foregroundAlpha</code>.
   *
   * @param {number} [foregroundAlpha=1] - the foreground alpha to be set
   * @public
   */
  set foregroundAlpha(foregroundAlpha) {
    const changed = Utilities.setter(this, '_foregroundAlpha', foregroundAlpha, QRious.DEFAULTS.foregroundAlpha)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the error correction level for the QR code.
   *
   * @return {string} The ECC level.
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
   * @param {string} [level="L"] - the ECC level to be set
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
   * @return {string} The image MIME type.
   * @public
   */
  get mime() {
    return this._mime
  }

  /**
   * Sets the MIME type for the image rendered for the QR code to <code>mime</code>.
   *
   * @param {string} [mime="image/png"] - the image MIME type to be set
   * @public
   */
  set mime(mime) {
    const changed = Utilities.setter(this, '_mime', mime, QRious.DEFAULTS.mime)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the padding for the QR code.
   *
   * @return {number} The padding in pixels.
   * @public
   */
  get padding() {
    return this._padding
  }

  /**
   * Sets the padding for the QR code to <code>padding</code>.
   *
   * <code>padding</code> will be transformed to ensure that it is always an absolute positive numbers (e.g.
   * <code>-10</code> would become <code>10</code>).
   *
   * @param {number} [padding] - the padding in pixels to be set
   * @public
   */
  set padding(padding) {
    const changed = Utilities.setter(this, '_padding', padding, QRious.DEFAULTS.padding, Utilities.abs)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the size of the QR code.
   *
   * @return {number} The size in pixels.
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
   * @param {number} [size=100] - the size in pixels to be set
   * @public
   */
  set size(size) {
    const changed = Utilities.setter(this, '_size', size, QRious.DEFAULTS.size, Utilities.abs)

    if (changed) {
      this.update()
    }
  }

  /**
   * Returns the value of the QR code.
   *
   * @return {string} The value.
   * @public
   */
  get value() {
    return this._value
  }

  /**
   * Sets the value of the QR code to <code>value</code>.
   *
   * @param {string} [value=""] - the value to be set
   * @public
   */
  set value(value) {
    const changed = Utilities.setter(this, '_value', value, QRious.DEFAULTS.value)

    if (changed) {
      this.update()
    }
  }

}

QRious._serviceManager = new ServiceManager()

export default QRious

/**
 * The options used by {@link QRious}.
 *
 * @typedef {Object} QRious~Options
 * @property {string} [background="white"] - The background color to be applied to the QR code.
 * @property {number} [backgroundAlpha=1] - The background alpha to be applied to the QR code.
 * @property {*} [element] - The element to be used to render the QR code which may either be an <code>canvas</code> or
 * <code>img</code>. The element(s) will be created if needed.
 * @property {string} [foreground="black"] - The foreground color to be applied to the QR code.
 * @property {number} [foregroundAlpha=1] - The foreground alpha to be applied to the QR code.
 * @property {string} [level="L"] - The error correction level to be applied to the QR code.
 * @property {string} [mime="image/png"] - The MIME type to be used to render the image for the QR code.
 * @property {number} [padding] - The padding for the QR code in pixels.
 * @property {number} [size=100] - The size of the QR code in pixels.
 * @property {string} [value=""] - The value to be encoded within the QR code.
 */
