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

import Service from '../Service';
import Utilities from '../../util/Utilities';

/**
 * A service for working with elements.
 *
 * @public
 * @extends Service
 */
class ElementService extends Service {

  /**
   * Creates an instance of a canvas element.
   *
   * @return {*} The newly created canvas element.
   * @public
   */
  createCanvas() {
    Utilities.throwUnimplemented('ElementService', 'createCanvas');
  }

  /**
   * Creates an instance of a image element.
   *
   * @return {*} The newly created image element.
   * @public
   */
  createImage() {
    Utilities.throwUnimplemented('ElementService', 'createImage');
  }

  /**
   * @override
   */
  getName() {
    return 'element';
  }

  /**
   * Returns whether the specified <code>element</code> is a canvas.
   *
   * @param {*} element - the element to be checked
   * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
   * @public
   */
  isCanvas(element) {
    Utilities.throwUnimplemented('ElementService', 'isCanvas');
  }

  /**
   * Returns whether the specified <code>element</code> is an image.
   *
   * @param {*} element - the element to be checked
   * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
   * @public
   */
  isImage(element) {
    Utilities.throwUnimplemented('ElementService', 'isImage');
  }

}

export default ElementService;
