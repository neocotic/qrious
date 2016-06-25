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

/**
 * Contains utility methods that are useful throughout the library.
 *
 * @public
 */
class Utilities {

  /**
   * Copies all properties from the <code>source</code> object to the <code>target</code> object, however, all property
   * names on the <code>target</code> will be prefixed with an underscore, used to indicate that they are private.
   *
   * @param {Object} target - the object to which the private fields are to be copied
   * @param {Object} source - the object from which the fields are to be copied
   * @return {Object} A reference to the <code>target</code> object.
   * @public
   * @static
   */
  static privatize(target, source) {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        target[`_${key}`] = source[key]
      }
    }

    return target
  }

  /**
   * Sets the specified <code>value</code> on a given field on the <code>object</code> provided.
   *
   * If <code>value</code> is <code>null</code>, the specified default value will be used instead.
   *
   * An optional <code>transformer</code> can be specified which will be used to transform the value (or default value)
   * before it is assigned to the field.
   *
   * @param {Object} object - the object whose field is to be set with <code>value</code>
   * @param {String} fieldName - the field to be set with <code>value</code>
   * @param {*} value - the value to be set on the named field
   * @param {*} [defaultValue] - the value to be used if <code>value</code> is <code>null</code>
   * @param {Function} [transformer] - a function used to transform the value before it is assigned to the named field
   * @return {Boolean} <code>true</code> if the value of the field has changed as a result of the assignment; otherwise
   * <code>false</code>.
   * @public
   * @static
   */
  static setter(object, fieldName, value, defaultValue, transformer) {
    const oldValue = object[fieldName]
    let newValue = value != null ? value : defaultValue
    if (typeof transformer === 'function') {
      newValue = transformer(newValue)
    }

    object[fieldName] = newValue

    return newValue !== oldValue
  }

  /**
   * Throws an error indicating that the a given method on a specific class has not been implemented.
   *
   * @param {String} className - the name of the class on which the method has not been implemented
   * @param {String} methodName - the name of the method which has not been implemented
   * @throws {Error} The error describing the class method which has not been implemented.
   * @public
   * @static
   */
  static throwUnimplemented(className, methodName) {
    throw new Error(`"${methodName}" method must be implemented on the ${className} class`)
  }

  /**
   * Transforms the specified <code>string</code> to upper case while remaining null-safe.
   *
   * @param {String} string - the string to be transformed to upper case
   * @return {String} <code>string</code> transformed to upper case if <code>string</code> is not <code>null</code>.
   * @public
   * @static
   */
  static toUpperCase(string) {
    return string != null && string.toUpperCase()
  }
}

export default Utilities
