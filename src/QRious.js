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

import CanvasRenderer from './renderer/CanvasRenderer';
import Frame from './Frame';
import ImageRenderer from './renderer/ImageRenderer';
import Option from './option/Option';
import OptionManager from './option/OptionManager';
import ServiceManager from './service/ServiceManager';
import Utilities from './util/Utilities';

const optionManager = new OptionManager([
  new Option('background', 'white'),
  new Option('backgroundAlpha', 1, Utilities.abs),
  new Option('element'),
  new Option('foreground', 'black'),
  new Option('foregroundAlpha', 1, Utilities.abs),
  new Option('level', 'L', Utilities.toUpperCase),
  new Option('mime', 'image/png'),
  new Option('padding', null, Utilities.abs),
  new Option('size', 100, Utilities.abs),
  new Option('value', '')
]);
const serviceManager = new ServiceManager();

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
   * @deprecated Since 2.3.0
   * @public
   * @static
   */
  static get DEFAULTS() {
    const result = {};

    optionManager.options.forEach((option) => {
      result[option.name] = option.defaultValue;
    });

    return result;
  }

  /**
   * Returns the current version of {@link QRious}.
   *
   * @return {string} The current version.
   * @public
   * @static
   */
  static get VERSION() {
    return '2.3.0';
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
    serviceManager.setService(service.getName(), service);
  }

  /**
   * Creates a new instance of {@link QRious} based on the <code>options</code> provided.
   *
   * @param {QRious~Options} [options] - the options to be used
   * @throws {Error} If any <code>options</code> are invalid.
   * @public
   */
  constructor(options) {
    optionManager.applyDefaults(this);
    optionManager.setAll(options, this);

    const element = optionManager.get('element', this);
    const elementService = serviceManager.getService('element');
    const canvas = element && elementService.isCanvas(element) ? element : elementService.createCanvas();
    const image = element && elementService.isImage(element) ? element : elementService.createImage();

    this._canvasRenderer = new CanvasRenderer(this, canvas, true);
    this._imageRenderer = new ImageRenderer(this, image, image === element);

    this.update();
  }

  /**
   * Returns all of the options configured for this {@link QRious}.
   *
   * Any changes made to the returned object will not be reflected in the options themselves or their corresponding
   * underlying fields.
   *
   * @return {Object.<string, *>} A copy of the applied options.
   * @public
   */
  get() {
    return optionManager.getAll(this);
  }

  /**
   * Sets all of the specified <code>options</code> and automatically updates this {@link QRious} if any of the
   * underlying fields are changed as a result.
   *
   * This is the preferred method for updating multiple options at one time to avoid unnecessary updates between
   * changes.
   *
   * @param {QRious~Options} options - the options to be set
   * @return {void}
   * @throws {Error} If any <code>options</code> are invalid.
   * @public
   */
  set(options) {
    if (optionManager.setAll(options, this)) {
      this.update();
    }
  }

  /**
   * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
   *
   * @param {string} [mime] - the MIME type for the image
   * @return {string} The image data URI for the QR code.
   * @public
   */
  toDataURL(mime) {
    return this.canvas.toDataURL(mime || this.mime);
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
    });

    this._canvasRenderer.render(frame);
    this._imageRenderer.render(frame);
  }

  /**
   * Returns the background color for the QR code.
   *
   * @return {string} The background color.
   * @public
   */
  get background() {
    return optionManager.get('background', this);
  }

  /**
   * Sets the background color for the QR code to <code>background</code> and automatically updates this {@link QRious}
   * if the underlying field is changed as a result.
   *
   * @param {string} [background="white"] - the background color to be set
   * @public
   */
  set background(background) {
    if (optionManager.set('background', background, this)) {
      this.update();
    }
  }

  /**
   * Returns the background alpha for the QR code.
   *
   * @return {number} The background alpha.
   * @public
   */
  get backgroundAlpha() {
    return optionManager.get('backgroundAlpha', this);
  }

  /**
   * Sets the background alpha for the QR code to <code>backgroundAlpha</code> and automatically updates this
   * {@link QRious} if the underlying field is changed as a result.
   *
   * @param {number} [backgroundAlpha=1] - the background alpha to be set
   * @public
   */
  set backgroundAlpha(backgroundAlpha) {
    if (optionManager.set('backgroundAlpha', backgroundAlpha, this)) {
      this.update();
    }
  }

  /**
   * Returns the <code>canvas</code> element being used to render the QR code for this {@link QRious}.
   *
   * @return {*} The <code>canvas</code> element.
   * @public
   */
  get canvas() {
    return this._canvasRenderer.getElement();
  }

  /**
   * Returns the foreground color for the QR code.
   *
   * @return {string} The foreground color.
   * @public
   */
  get foreground() {
    return optionManager.get('foreground', this);
  }

  /**
   * Sets the foreground color for the QR code to <code>foreground</code> and automatically updates this {@link QRious}
   * if the underlying field is changed as a result.
   *
   * @param {string} [foreground="black"] - the foreground color to be set
   * @public
   */
  set foreground(foreground) {
    if (optionManager.set('foreground', foreground, this)) {
      this.update();
    }
  }

  /**
   * Returns the foreground alpha for the QR code.
   *
   * @return {number} The foreground alpha.
   * @public
   */
  get foregroundAlpha() {
    return optionManager.get('foregroundAlpha', this);
  }

  /**
   * Sets the foreground alpha for the QR code to <code>foregroundAlpha</code> and automatically updates this
   * {@link QRious} if the underlying field is changed as a result.
   *
   * @param {number} [foregroundAlpha=1] - the foreground alpha to be set
   * @public
   */
  set foregroundAlpha(foregroundAlpha) {
    if (optionManager.set('foregroundAlpha', foregroundAlpha, this)) {
      this.update();
    }
  }

  /**
   * Returns the <code>img</code> element being used to render the QR code for this {@link QRious}.
   *
   * @return {*} The <code>img</code> element.
   * @public
   */
  get image() {
    return this._imageRenderer.getElement();
  }

  /**
   * Returns the error correction level for the QR code.
   *
   * @return {string} The ECC level.
   * @public
   */
  get level() {
    return optionManager.get('level', this);
  }

  /**
   * Sets the error correction level for the QR code to <code>level</code> and automatically updates this {@link QRious}
   * if the underlying field is changed as a result.
   *
   * <code>level</code> will be transformed to upper case to aid mapping to known ECC level blocks.
   *
   * @param {string} [level="L"] - the ECC level to be set
   * @public
   */
  set level(level) {
    if (optionManager.set('level', level, this)) {
      this.update();
    }
  }

  /**
   * Returns the MIME type for the image rendered for the QR code.
   *
   * @return {string} The image MIME type.
   * @public
   */
  get mime() {
    return optionManager.get('mime', this);
  }

  /**
   * Sets the MIME type for the image rendered for the QR code to <code>mime</code> and automatically updates this
   * {@link QRious} if the underlying field is changed as a result.
   *
   * @param {string} [mime="image/png"] - the image MIME type to be set
   * @public
   */
  set mime(mime) {
    if (optionManager.set('mime', mime, this)) {
      this.update();
    }
  }

  /**
   * Returns the padding for the QR code.
   *
   * @return {number} The padding in pixels.
   * @public
   */
  get padding() {
    return optionManager.get('padding', this);
  }

  /**
   * Sets the padding for the QR code to <code>padding</code> and automatically updates this {@link QRious} if the
   * underlying field is changed as a result.
   *
   * <code>padding</code> will be transformed to ensure that it is always an absolute positive numbers (e.g.
   * <code>-10</code> would become <code>10</code>).
   *
   * @param {number} [padding] - the padding in pixels to be set
   * @public
   */
  set padding(padding) {
    if (optionManager.set('padding', padding, this)) {
      this.update();
    }
  }

  /**
   * Returns the size of the QR code.
   *
   * @return {number} The size in pixels.
   * @public
   */
  get size() {
    return optionManager.get('size', this);
  }

  /**
   * Sets the size of the QR code to <code>size</code> and automatically updates this {@link QRious} if the underlying
   * field is changed as a result.
   *
   * <code>size</code> will be transformed to ensure that it is always an absolute positive numbers (e.g.
   * <code>-100</code> would become <code>100</code>).
   *
   * @param {number} [size=100] - the size in pixels to be set
   * @public
   */
  set size(size) {
    if (optionManager.set('size', size, this)) {
      this.update();
    }
  }

  /**
   * Returns the value of the QR code.
   *
   * @return {string} The value.
   * @public
   */
  get value() {
    return optionManager.get('value', this);
  }

  /**
   * Sets the value of the QR code to <code>value</code> and automatically updates this {@link QRious} if the underlying
   * field is changed as a result.
   *
   * @param {string} [value=""] - the value to be set
   * @public
   */
  set value(value) {
    if (optionManager.set('value', value, this)) {
      this.update();
    }
  }

}

export default QRious;

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
