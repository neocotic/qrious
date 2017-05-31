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

/**
 * Contains utility methods that are useful throughout the library.
 *
 * @public
 */
class Utilities {

  /**
   * Returns the absolute value of a given number.
   *
   * This method is simply a convenient shorthand for <code>Math.abs</code> while ensuring that nulls are returned as
   * <code>null</code> instead of zero.
   *
   * @param {number} value - the number whose absolute value is to be returned
   * @return {number} The absolute value of <code>value</code> or <code>null</code> if <code>value</code> is
   * <code>null</code>.
   * @public
   * @static
   */
  static abs(value) {
    return value != null ? Math.abs(value) : null;
  }

  /**
   * Returns whether the specified <code>object</code> has a property with the specified <code>name</code> as an own
   * (not inherited) property.
   *
   * @param {Object} object - the object on which the property is to be checked
   * @param {string} name - the name of the property to be checked
   * @return {boolean} <code>true</code> if <code>object</code> has an own property with <code>name</code>.
   * @public
   * @static
   */
  static hasOwn(object, name) {
    return Object.prototype.hasOwnProperty.call(object, name);
  }

  /**
   * Throws an error indicating that the a given method on a specific class has not been implemented.
   *
   * @param {string} className - the name of the class on which the method has not been implemented
   * @param {string} methodName - the name of the method which has not been implemented
   * @return {void}
   * @throws {Error} The error describing the class method which has not been implemented.
   * @public
   * @static
   */
  static throwUnimplemented(className, methodName) {
    throw new Error(`"${methodName}" method must be implemented on the ${className} class`);
  }

  /**
   * Transforms the specified <code>string</code> to upper case while remaining null-safe.
   *
   * @param {string} string - the string to be transformed to upper case
   * @return {string} <code>string</code> transformed to upper case if <code>string</code> is not <code>null</code>.
   * @public
   * @static
   */
  static toUpperCase(string) {
    return string != null ? string.toUpperCase() : null;
  }

}

export default Utilities;
