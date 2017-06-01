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

var CanvasRenderer = require('./renderer/CanvasRenderer');
var Frame = require('./Frame');
var ImageRenderer = require('./renderer/ImageRenderer');
var Option = require('./option/Option');
var OptionManager = require('./option/OptionManager');
var ServiceManager = require('./service/ServiceManager');
var Utilities = require('./util/Utilities');

var optionManager = new OptionManager([
  new Option('background', true, 'white'),
  new Option('backgroundAlpha', true, 1, Utilities.abs),
  new Option('element'),
  new Option('foreground', true, 'black'),
  new Option('foregroundAlpha', true, 1, Utilities.abs),
  new Option('level', true, 'L', Utilities.toUpperCase),
  new Option('mime', true, 'image/png'),
  new Option('padding', true, null, Utilities.abs),
  new Option('size', true, 100, Utilities.abs),
  new Option('value', true, '')
]);
var serviceManager = new ServiceManager();

/**
 * Enables configuration of a QR code generator which uses HTML5 <code>canvas</code> for rendering.
 *
 * @param {QRious~Options} [options] - the options to be used
 * @throws {Error} If any <code>options</code> are invalid.
 * @public
 * @class
 * @extends Nevis
 */
var QRious = Nevis.extend(function(options) {
  optionManager.init(options, this, this.update.bind(this));

  var element = optionManager.get('element', this);
  var elementService = serviceManager.getService('element');
  var canvas = element && elementService.isCanvas(element) ? element : elementService.createCanvas();
  var image = element && elementService.isImage(element) ? element : elementService.createImage();

  this._canvasRenderer = new CanvasRenderer(this, canvas, true);
  this._imageRenderer = new ImageRenderer(this, image, image === element);

  this.update();
}, {

  /**
   * Returns all of the options configured for this {@link QRious}.
   *
   * Any changes made to the returned object will not be reflected in the options themselves or their corresponding
   * underlying fields.
   *
   * @return {Object.<string, *>} A copy of the applied options.
   * @public
   * @memberof QRious#
   */
  get: function() {
    return optionManager.getAll(this);
  },

  /**
   * Sets all of the specified <code>options</code> and automatically updates this {@link QRious} if any of the
   * underlying fields are changed as a result.
   *
   * This is the preferred method for updating multiple options at one time to avoid unnecessary updates between
   * changes.
   *
   * @param {QRious~Options} options - the options to be set
   * @return {void}
   * @throws {Error} If any <code>options</code> are invalid or cannot be modified.
   * @public
   * @memberof QRious#
   */
  set: function(options) {
    if (optionManager.setAll(options, this)) {
      this.update();
    }
  },

  /**
   * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
   *
   * @param {string} [mime] - the MIME type for the image
   * @return {string} The image data URI for the QR code.
   * @public
   * @memberof QRious#
   */
  toDataURL: function(mime) {
    return this.canvas.toDataURL(mime || this.mime);
  },

  /**
   * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
   *
   * @return {void}
   * @protected
   * @memberof QRious#
   */
  update: function() {
    var frame = new Frame({
      level: this.level,
      value: this.value
    });

    this._canvasRenderer.render(frame);
    this._imageRenderer.render(frame);
  }

}, {

  /**
   * The current version of {@link QRious}.
   *
   * @public
   * @static
   * @type {string}
   * @memberof QRious
   */
  VERSION: '3.0.1',

  /**
   * Configures the <code>service</code> provided to be used by all {@link QRious} instances.
   *
   * @param {Service} service - the {@link Service} to be configured
   * @return {void}
   * @throws {Error} If a {@link Service} has already been configured with the same name.
   * @public
   * @static
   * @memberof QRious
   */
  use: function(service) {
    serviceManager.setService(service.getName(), service);
  }

});

Object.defineProperties(QRious.prototype, {

  canvas: {
    /**
     * Returns the <code>canvas</code> element being used to render the QR code for this {@link QRious}.
     *
     * @return {*} The <code>canvas</code> element.
     * @public
     * @memberof QRious#
     * @alias canvas
     */
    get: function() {
      return this._canvasRenderer.getElement();
    }
  },

  image: {
    /**
     * Returns the <code>img</code> element being used to render the QR code for this {@link QRious}.
     *
     * @return {*} The <code>img</code> element.
     * @public
     * @memberof QRious#
     * @alias image
     */
    get: function() {
      return this._imageRenderer.getElement();
    }
  }

});

module.exports = QRious;

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
