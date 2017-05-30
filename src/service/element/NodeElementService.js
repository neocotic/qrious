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

import Canvas, { Image } from 'canvas';

import ElementService from './ElementService';

/**
 * An implementation of {@link ElementService} intended for use within a Node.js environment but is only supported when
 * the <code>canvas</code> module has also been depended on.
 *
 * @public
 * @extends ElementService
 */
class NodeElementService extends ElementService {

  /**
   * @override
   */
  static isSupported() {
    return Canvas != null;
  }

  /**
   * @override
   */
  createCanvas() {
    return new Canvas();
  }

  /**
   * @override
   */
  createImage() {
    return new Image();
  }

  /**
   * @override
   */
  isCanvas(element) {
    return element instanceof Canvas;
  }

  /**
   * @override
   */
  isImage(element) {
    return element instanceof Image;
  }

}

export default NodeElementService;
