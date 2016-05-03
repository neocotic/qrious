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
 * Defines a service contract that must be met by all implementations.
 *
 * @public
 */
class Service {

  /**
   * Returns whether or not the {@link Service} is supported in the current context.
   *
   * By default, this method will always return <code>true</code> but implementations are free to override this method
   * as and when needed to control the usage of the {@link Service}.
   *
   * Also, the default logic for a {@link ServiceProvider} is to ignore unsupported implementations.
   *
   * @return {Boolean} <code>true</code> if the {@link Service} implementation is supported in the current context;
   * otherwise <code>false</code>.
   * @public
   * @static
   */
  static isSupported() {
    return true
  }
}

module.exports = Service
