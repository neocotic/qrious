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

const Renderer = require('./Renderer')

/**
 * TODO: Document
 *
 * @public
 * @extends Renderer
 */
class CanvasRenderer extends Renderer {

  /**
   * @override
   */
  draw(frame) {
    const qrious = this.qrious
    const pixels = this.getPixels(frame)
    const offset = this.getOffset(frame)
    const context = qrious.canvas.getContext('2d')

    context.fillStyle = qrious.foreground

    for (let i = 0; i < frame.width; i++) {
      for (let j = 0; j < frame.width; j++) {
        if (frame.buffer[j * frame.width + i]) {
          context.fillRect(pixels * i + offset, pixels * j + offset, pixels, pixels)
        }
      }
    }
  }

  /**
   * @override
   */
  reset() {
    const qrious = this.qrious
    const context = qrious.canvas.getContext('2d')

    context.lineWidth = 1
    context.clearRect(0, 0, qrious.size, qrious.size)
    context.fillStyle = qrious.background
    context.fillRect(0, 0, qrious.size, qrious.size)
  }

  /**
   * @override
   */
  resize() {
    const qrious = this.qrious
    const canvas = qrious.canvas

    canvas.width = qrious.size
    canvas.height = qrious.size
  }
}

module.exports = CanvasRenderer
