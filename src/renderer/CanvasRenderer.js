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

import Renderer from './Renderer';

/**
 * An implementation of {@link Renderer} for working with <code>canvas</code> elements.
 *
 * @public
 * @extends Renderer
 */
class CanvasRenderer extends Renderer {

  /**
   * @override
   */
  draw(frame) {
    const qrious = this.qrious;
    const moduleSize = this.getModuleSize(frame);
    const offset = this.getOffset(frame);
    const context = this.element.getContext('2d');

    context.fillStyle = qrious.foreground;
    context.globalAlpha = qrious.foregroundAlpha;

    for (let i = 0; i < frame.width; i++) {
      for (let j = 0; j < frame.width; j++) {
        if (frame.buffer[(j * frame.width) + i]) {
          context.fillRect((moduleSize * i) + offset, (moduleSize * j) + offset, moduleSize, moduleSize);
        }
      }
    }
  }

  /**
   * @override
   */
  reset() {
    const qrious = this.qrious;
    const context = this.element.getContext('2d');
    const size = qrious.size;

    context.lineWidth = 1;
    context.clearRect(0, 0, size, size);
    context.fillStyle = qrious.background;
    context.globalAlpha = qrious.backgroundAlpha;
    context.fillRect(0, 0, size, size);
  }

  /**
   * @override
   */
  resize() {
    this.element.width = this.element.height = this.qrious.size;
  }

}

export default CanvasRenderer;
