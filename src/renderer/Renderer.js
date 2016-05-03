/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const Utilities = require('../util/Utilities')

/**
 * TODO: Document
 *
 * @public
 */
class Renderer {

  /**
   * TODO: Document
   *
   * @param {QRious} qrious -
   * @public
   */
  constructor(qrious) {
    /**
     * TODO: Document
     *
     * @protected
     * @type {QRious}
     */
    this.qrious = qrious
  }

  /**
   * TODO: Document
   *
   * @param {QRFrame} frame -
   * @protected
   */
  draw(frame) {
    Utilities.throwUnimplemented('Renderer', 'draw')
  }

  /**
   * TODO: Document
   *
   * @param {QRFrame} frame -
   * @return {Number}
   * @protected
   */
  getOffset(frame) {
    const pixels = this.getPixels(frame)

    return Math.floor((this.qrious.size - pixels * frame.width) / 2)
  }

  /**
   * TODO: Document
   *
   * @param {QRFrame} frame -
   * @return {Number}
   * @protected
   */
  getPixels(frame) {
    const pixels = this.qrious.size / frame.width

    return Math.floor(pixels)
  }

  /**
   * TODO: Document
   *
   * @param {QRFrame} frame -
   * @public
   */
  render(frame) {
    this.resize()
    this.reset()
    this.draw(frame)
  }

  /**
   * TODO: Document
   *
   * @protected
   */
  reset() {
    Utilities.throwUnimplemented('Renderer', 'reset')
  }

  /**
   * TODO: Document
   *
   * @protected
   */
  resize() {
    Utilities.throwUnimplemented('Renderer', 'resize')
  }
}

module.exports = Renderer
