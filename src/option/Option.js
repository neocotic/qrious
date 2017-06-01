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

'use strict';

var Nevis = require('nevis/lite');

/**
 * Defines an available option while also configuring how values are applied to the target object.
 *
 * Optionally, a default value can be specified as well a value transformer and a field name resolver for greater
 * control over how the option value is applied.
 *
 * If no value transformer is specified, then any specified option will be applied directly.
 *
 * If no field name resolver is specified, then the field name will be resolved to the option name prefixed with a
 * single underscore when the option is applied.
 *
 * @param {string} name - the name to be used
 * @param {*} [defaultValue] - the default value to be used
 * @param {Option~ValueTransformer} [valueTransformer] - the value transformer to be used
 * @param {Option~FieldNameResolver} [fieldNameResolver] - the field name resolver to be used
 * @public
 * @class
 * @extends Nevis
 */
var Option = Nevis.extend('Option', function(name, defaultValue, valueTransformer, fieldNameResolver) {
  /**
   * The name for this {@link Option}.
   *
   * @public
   * @type {string}
   * @memberof Option#
   */
  this.name = name;

  /**
   * The default value for this {@link Option}.
   *
   * @public
   * @type {*}
   * @memberof Option#
   */
  this.defaultValue = defaultValue;

  this._valueTransformer = valueTransformer;

  /**
   * The field name for this {@link Option}.
   *
   * @public
   * @type {string}
   * @memberof Option#
   */
  this.fieldName = typeof fieldNameResolver === 'function' ? fieldNameResolver(this) : '_' + name;
}, {

  /**
   * Transforms the specified <code>value</code> so that it can be applied for this {@link Option}.
   *
   * If a value transformer has been specified for this {@link Option}, it will be called upon to transform
   * <code>value</code>. Otherwise, <code>value</code> will be returned directly.
   *
   * @param {*} value - the value to be transformed
   * @return {*} The transformed value or <code>value</code> if no value transformer is specified.
   * @public
   * @memberof Option#
   */
  transform: function(value) {
    var transformer = this._valueTransformer;
    if (typeof transformer === 'function') {
      return transformer(value, this);
    }

    return value;
  }

});

module.exports = Option;

/**
 * Returns the field name to which the specified <code>option</code> is associated on the target object.
 *
 * The resolved name will be used to identify the field that values for <code>option</code> are to be read from and
 * written to.
 *
 * This function will only called once for <code>option</code>, upon initialization.
 *
 * @callback Option~FieldNameResolver
 * @param {Option} option - the {@link Option} whose field name is to be resolved
 * @return {string} The resolved field name for <code>option</code>.
 */

/**
 * Returns a transformed value for the specified <code>value</code> to be applied for the <code>option</code> provided.
 *
 * @callback Option~ValueTransformer
 * @param {*} value - the value to be transformed
 * @param {Option} option - the {@link Option} for which <code>value</code> is being transformed
 * @return {*} The transform value.
 */
