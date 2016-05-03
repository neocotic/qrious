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

/**
 * A basic provider for {@link Service} implementations which, by default, returns the first implementation that
 * supports the current context.
 *
 * @public
 */
class ServiceProvider {

  /**
   * Creates a new instance of {@link ServiceProvider} with the optional list of {@link Service}
   * <code>implementations</code> provided.
   *
   * @param {Function[]} [implementations] - any implementations classes to be considered by this provider
   * @public
   */
  constructor(implementations) {
    /**
     * A list of {@link Service} implementations being considered by this provider.
     *
     * This list consists of implementation classes and <b>not</b> instances.
     *
     * @protected
     * @type {Function[]}
     */
    this.implementations = implementations ? implementations.slice(0) : []
  }

  /**
   * Provides an instance of a matching {@link Service} implementation.
   *
   * By default, this method will return an instance of the first implementation that supports the current context,
   * however, implementations of {@link ServiceProvider} are free to override this method to provide alternative logic
   * if needed.
   *
   * @return {Service} A new instance of a matching {@link Service} implementation.
   * @throws {Error} If no {@link Service} implementation could be provided.
   * @public
   */
  getService() {
    let Service = this.implementations.find((Implementation) => {
      return typeof Implementation.isSupported === 'function' && Implementation.isSupported()
    })

    if (!Service) {
      throw new Error('Unable to provide service implementation')
    }

    return new Service()
  }
}

module.exports = ServiceProvider
