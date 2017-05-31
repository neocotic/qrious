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

import Utilities from '../util/Utilities';

/**
 * Responsible for rendering a QR code {@link Frame} on a specific type of element.
 *
 * A renderer may be dependant on the rendering of another element, so the ordering of their execution is important.
 *
 * The rendering of a element can be deferred by disabling the renderer initially, however, any attempt get the element
 * from the renderer will result in it being immediately enabled and the element being rendered.
 *
 * @public
 */
class Renderer {

  /**
   * Creates a new instance of {@link Renderer} for the <code>qrious</code> instance and <code>element</code> provided.
   *
   * @param {QRious} qrious - the {@link QRious} instance to be used
   * @param {*} element - the element onto which the QR code is to be rendered
   * @param {boolean} [enabled] - <code>true</code> this {@link Renderer} is enabled; otherwise <code>false</code>.
   * @public
   */
  constructor(qrious, element, enabled) {
    /**
     * The {@link QRious} instance.
     *
     * @protected
     * @type {QRious}
     */
    this.qrious = qrious;

    /**
     * The element onto which this {@link Renderer} is rendering the QR code.
     *
     * @protected
     * @type {*}
     */
    this.element = element;
    this.element.qrious = qrious;

    /**
     * Whether this {@link Renderer} is enabled.
     *
     * @protected
     * @type {boolean}
     */
    this.enabled = Boolean(enabled);
  }

  /**
   * Draws the specified QR code <code>frame</code> on the underlying element.
   *
   * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
   *
   * @param {Frame} frame - the {@link Frame} to be drawn
   * @return {void}
   * @protected
   */
  draw(frame) {
    Utilities.throwUnimplemented('Renderer', 'draw');
  }

  /**
   * Returns the element onto which this {@link Renderer} is rendering the QR code.
   *
   * If this method is called while this {@link Renderer} is disabled, it will be immediately enabled and rendered
   * before the element is returned.
   *
   * @return {*} The element.
   * @public
   */
  getElement() {
    if (!this.enabled) {
      this.enabled = true;
      this.render();
    }

    return this.element;
  }

  /**
   * Calculates the size (in pixel units) to represent an individual module within the QR code based on the
   * <code>frame</code> provided.
   *
   * Any configured padding will be excluded from the returned size.
   *
   * The returned value will be at least one, even in cases where the size of the QR code does not fit its contents.
   * This is done so that the inevitable clipping is handled more gracefully since this way at least something is
   * displayed instead of just a blank space filled by the background color.
   *
   * @param {Frame} frame - the {@link Frame} from which the module size is to be derived
   * @return {number} The pixel size for each module in the QR code which will be no less than one.
   * @protected
   */
  getModuleSize(frame) {
    const qrious = this.qrious;
    const padding = qrious.padding || 0;
    const pixels = Math.floor((qrious.size - (padding * 2)) / frame.width);

    return Math.max(1, pixels);
  }

  /**
   * Calculates the offset/padding (in pixel units) to be inserted before the QR code based on the <code>frame</code>
   * provided.
   *
   * The returned value will be zero if there is no available offset or if the size of the QR code does not fit its
   * contents. It will never be a negative value. This is done so that the inevitable clipping appears more naturally
   * and it is not clipped from all directions.
   *
   * @param {Frame} frame - the {@link Frame} from which the offset is to be derived
   * @return {number} The pixel offset for the QR code which will be no less than zero.
   * @protected
   */
  getOffset(frame) {
    const qrious = this.qrious;
    const padding = qrious.padding;

    if (padding != null) {
      return padding;
    }

    const moduleSize = this.getModuleSize(frame);
    const offset = Math.floor((qrious.size - (moduleSize * frame.width)) / 2);

    return Math.max(0, offset);
  }

  /**
   * Renders a QR code on the underlying element based on the <code>frame</code> provided.
   *
   * @param {Frame} frame - the {@link Frame} to be rendered
   * @return {void}
   * @public
   */
  render(frame) {
    if (this.enabled) {
      this.resize();
      this.reset();
      this.draw(frame);
    }
  }

  /**
   * Resets the underlying element, effectively clearing any previously rendered QR code.
   *
   * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
   *
   * @return {void}
   * @protected
   */
  reset() {
    Utilities.throwUnimplemented('Renderer', 'reset');
  }

  /**
   * Ensures that the size of the underlying element matches that defined on the associated {@link QRious} instance.
   *
   * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
   *
   * @return {void}
   * @protected
   */
  resize() {
    Utilities.throwUnimplemented('Renderer', 'resize');
  }

}

export default Renderer;
