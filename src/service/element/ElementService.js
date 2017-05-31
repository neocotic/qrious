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

var Service = require('../Service');
var Utilities = require('../../util/Utilities');

/**
 * A service for working with elements.
 *
 * @public
 * @class
 * @extends Service
 */
var ElementService = Service.extend('ElementService', {

  /**
   * Creates an instance of a canvas element.
   *
   * @return {*} The newly created canvas element.
   * @public
   * @memberof ElementService#
   */
  createCanvas: function() {
    Utilities.throwUnimplemented('ElementService', 'createCanvas');
  },

  /**
   * Creates an instance of a image element.
   *
   * @return {*} The newly created image element.
   * @public
   * @memberof ElementService#
   */
  createImage: function() {
    Utilities.throwUnimplemented('ElementService', 'createImage');
  },

  /**
   * @override
   */
  getName: function() {
    return 'element';
  },

  /**
   * Returns whether the specified <code>element</code> is a canvas.
   *
   * @param {*} element - the element to be checked
   * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
   * @public
   * @memberof ElementService#
   */
  isCanvas: function(element) {
    Utilities.throwUnimplemented('ElementService', 'isCanvas');
  },

  /**
   * Returns whether the specified <code>element</code> is an image.
   *
   * @param {*} element - the element to be checked
   * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
   * @public
   * @memberof ElementService#
   */
  isImage: function(element) {
    Utilities.throwUnimplemented('ElementService', 'isImage');
  }

});

module.exports = ElementService;
