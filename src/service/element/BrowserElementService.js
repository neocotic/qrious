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

import ElementService from './ElementService';

/**
 * An implementation of {@link ElementService} intended for use within a browser environment.
 *
 * @public
 * @extends ElementService
 */
class BrowserElementService extends ElementService {

  /**
   * @override
   */
  createCanvas() {
    return document.createElement('canvas');
  }

  /**
   * @override
   */
  createImage() {
    return document.createElement('img');
  }

  /**
   * @override
   */
  isCanvas(element) {
    return element instanceof HTMLCanvasElement;
  }

  /**
   * @override
   */
  isImage(element) {
    return element instanceof HTMLImageElement;
  }

}

export default BrowserElementService;
