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

var ElementService = require('qrious-core/src/service/element/ElementService');

/**
 * An implementation of {@link ElementService} intended for use within a browser environment.
 *
 * @public
 * @class
 * @extends ElementService
 */
var BrowserElementService = ElementService.extend({

  /**
   * @override
   */
  createCanvas: function() {
    return document.createElement('canvas');
  },

  /**
   * @override
   */
  createImage: function() {
    return document.createElement('img');
  },

  /**
   * @override
   */
  isCanvas: function(element) {
    return element instanceof HTMLCanvasElement;
  },

  /**
   * @override
   */
  isImage: function(element) {
    return element instanceof HTMLImageElement;
  }

});

module.exports = BrowserElementService;
