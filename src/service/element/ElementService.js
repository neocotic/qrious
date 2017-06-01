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

/**
 * A service for working with elements.
 *
 * @public
 * @class
 * @extends Service
 */
var ElementService = Service.extend({

  /**
   * Creates an instance of a canvas element.
   *
   * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
   *
   * @return {*} The newly created canvas element.
   * @public
   * @abstract
   * @memberof ElementService#
   */
  createCanvas: function() {},

  /**
   * Creates an instance of a image element.
   *
   * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
   *
   * @return {*} The newly created image element.
   * @public
   * @abstract
   * @memberof ElementService#
   */
  createImage: function() {},

  /**
   * @override
   */
  getName: function() {
    return 'element';
  },

  /**
   * Returns whether the specified <code>element</code> is a canvas.
   *
   * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
   *
   * @param {*} element - the element to be checked
   * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
   * @public
   * @abstract
   * @memberof ElementService#
   */
  isCanvas: function(element) {},

  /**
   * Returns whether the specified <code>element</code> is an image.
   *
   * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
   *
   * @param {*} element - the element to be checked
   * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
   * @public
   * @abstract
   * @memberof ElementService#
   */
  isImage: function(element) {}

});

module.exports = ElementService;
