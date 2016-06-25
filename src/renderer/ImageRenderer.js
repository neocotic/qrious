/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
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

import Renderer from './Renderer'

/**
 * An implementation of {@link Renderer} for working with <code>img</code> elements.
 *
 * This depends on {@link CanvasRenderer} being executed first as this implementation simply applies the data URL from
 * the rendered <code>canvas</code> element as the <code>src</code> for the <code>img</code> element being rendered.
 *
 * @public
 * @extends Renderer
 */
class ImageRenderer extends Renderer {

  /**
   * @override
   */
  draw() {
    const qrious = this.qrious

    qrious.image.src = qrious.toDataURL()
  }

  /**
   * @override
   */
  reset() {
    const qrious = this.qrious

    qrious.image.src = ''
  }

  /**
   * @override
   */
  resize() {
    const qrious = this.qrious
    const image = qrious.image

    image.width = qrious.size
    image.height = qrious.size
  }
}

export default ImageRenderer
