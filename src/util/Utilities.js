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
 * TODO: Document
 *
 * @public
 */
class Utilities {

  /**
   * TODO: Document
   *
   * @param {Object} target -
   * @param {Object} source -
   * @return {Object}
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
   * TODO: Document
   *
   * @param {Object} object -
   * @param {String} fieldName -
   * @param {*} value -
   * @param {*} [defaultValue] -
   * @param {Function} [transformer] -
   * @return {Boolean}
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
   * TODO: Document
   *
   * @param {String} className -
   * @param {String} methodName -
   * @throws {Error}
   * @public
   * @static
   */
  static throwUnimplemented(className, methodName) {
    throw new Error(`"${methodName}" method must be implemented on the ${className} class`)
  }

  /**
   * TODO: Document
   *
   * @param {String} string -
   * @return {String}
   * @public
   * @static
   */
  static toUpperCase(string) {
    return string != null && string.toUpperCase()
  }
}

module.exports = Utilities
