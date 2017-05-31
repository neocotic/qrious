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

var Canvas = require('canvas');

var ElementService = require('./ElementService');

/**
 * An implementation of {@link ElementService} intended for use within a Node.js environment but is only supported when
 * the <code>canvas</code> module has also been depended on.
 *
 * @public
 * @class
 * @extends ElementService
 */
var NodeElementService = ElementService.extend('NodeElementService', {

  /**
   * @override
   */
  createCanvas: function() {
    return new Canvas();
  },

  /**
   * @override
   */
  createImage: function() {
    return new Canvas.Image();
  },

  /**
   * @override
   */
  isCanvas: function(element) {
    return element instanceof Canvas;
  },

  /**
   * @override
   */
  isImage: function(element) {
    return element instanceof Canvas.Image;
  }

});

module.exports = NodeElementService;
