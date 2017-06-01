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

var Utilities = require('../util/Utilities');

/**
 * Manages multiple {@link Option} instances that are intended to be used by multiple implementations.
 *
 * Although the option definitions are shared between targets, the values are maintained on the targets themselves.
 *
 * @param {Option[]} options - the options to be used
 * @public
 * @class
 * @extends Nevis
 */
var OptionManager = Nevis.extend(function(options) {
  /**
   * The available options for this {@link OptionManager}.
   *
   * @public
   * @type {Object.<string, Option>}
   * @memberof OptionManager#
   */
  this.options = {};

  options.forEach(function(option) {
    this.options[option.name] = option;
  }, this);
}, {

  /**
   * Returns whether an option with the specified <code>name</code> is available.
   *
   * @param {string} name - the name of the {@link Option} whose existence is to be checked
   * @return {boolean} <code>true</code> if an {@link Option} exists with <code>name</code>; otherwise
   * <code>false</code>.
   * @public
   * @memberof OptionManager#
   */
  exists: function(name) {
    return this.options[name] != null;
  },

  /**
   * Returns the value of the option with the specified <code>name</code> on the <code>target</code> object provided.
   *
   * @param {string} name - the name of the {@link Option} whose value on <code>target</code> is to be returned
   * @param {Object} target - the object from which the value of the named {@link Option} is to be returned
   * @return {*} The value of the {@link Option} with <code>name</code> on <code>target</code>.
   * @public
   * @memberof OptionManager#
   */
  get: function(name, target) {
    return OptionManager._get(this.options[name], target);
  },

  /**
   * Returns a copy of all of the available options on the <code>target</code> object provided.
   *
   * @param {Object} target - the object from which the option name/value pairs are to be returned
   * @return {Object.<string, *>} A hash containing the name/value pairs of all options on <code>target</code>.
   * @public
   * @memberof OptionManager#
   */
  getAll: function(target) {
    var name;
    var options = this.options;
    var result = {};

    for (name in options) {
      if (Utilities.hasOwn(options, name)) {
        result[name] = OptionManager._get(options[name], target);
      }
    }

    return result;
  },

  /**
   * Initializes the available options for the <code>target</code> object provided and then applies the initial values
   * within the speciifed <code>options</code>.
   *
   * This method will throw an error if any of the names within <code>options</code> does not match an available option.
   *
   * This involves setting the default values and defining properties for all of the available options on
   * <code>target</code> before finally calling {@link OptionMananger#setAll} with <code>options</code> and
   * <code>target</code>. Any options that are configured to be modifiable will have a setter included in their defined
   * property that will allow its corresponding value to be modified.
   *
   * If a change handler is specified, it will be called whenever the value changes on <code>target</code> for a
   * modifiable option, but only when done so via the defined property's setter.
   *
   * @param {Object.<string, *>} options - the name/value pairs of the initial options to be set
   * @param {Object} target - the object on which the options are to be initialized
   * @param {Function} [changeHandler] - the function to be called whenever the value of an modifiable option changes on
   * <code>target</code>
   * @return {void}
   * @throws {Error} If <code>options</code> contains an invalid option name.
   * @public
   * @memberof OptionManager#
   */
  init: function(options, target, changeHandler) {
    if (typeof changeHandler !== 'function') {
      changeHandler = Utilities.noop;
    }

    var name, option;

    for (name in this.options) {
      if (Utilities.hasOwn(this.options, name)) {
        option = this.options[name];

        OptionManager._set(option, option.defaultValue, target);
        OptionManager._createAccessor(option, target, changeHandler);
      }
    }

    this._setAll(options, target, true);
  },

  /**
   * Sets the value of the option with the specified <code>name</code> on the <code>target</code> object provided to
   * <code>value</code>.
   *
   * This method will throw an error if <code>name</code> does not match an available option or matches an option that
   * cannot be modified.
   *
   * If <code>value</code> is <code>null</code> and the {@link Option} has a default value configured, then that default
   * value will be used instead. If the {@link Option} also has a value transformer configured, it will be used to
   * transform whichever value was determined to be used.
   *
   * This method returns whether the value of the underlying field on <code>target</code> was changed as a result.
   *
   * @param {string} name - the name of the {@link Option} whose value is to be set
   * @param {*} value - the value to be set for the named {@link Option} on <code>target</code>
   * @param {Object} target - the object on which <code>value</code> is to be set for the named {@link Option}
   * @return {boolean} <code>true</code> if the underlying field on <code>target</code> was changed; otherwise
   * <code>false</code>.
   * @throws {Error} If <code>name</code> is invalid or is for an option that cannot be modified.
   * @public
   * @memberof OptionManager#
   */
  set: function(name, value, target) {
    return this._set(name, value, target);
  },

  /**
   * Sets all of the specified <code>options</code> on the <code>target</code> object provided to their corresponding
   * values.
   *
   * This method will throw an error if any of the names within <code>options</code> does not match an available option
   * or matches an option that cannot be modified.
   *
   * If any value within <code>options</code> is <code>null</code> and the corresponding {@link Option} has a default
   * value configured, then that default value will be used instead. If an {@link Option} also has a value transformer
   * configured, it will be used to transform whichever value was determined to be used.
   *
   * This method returns whether the value for any of the underlying fields on <code>target</code> were changed as a
   * result.
   *
   * @param {Object.<string, *>} options - the name/value pairs of options to be set
   * @param {Object} target - the object on which the options are to be set
   * @return {boolean} <code>true</code> if any of the underlying fields on <code>target</code> were changed; otherwise
   * <code>false</code>.
   * @throws {Error} If <code>options</code> contains an invalid option name or an option that cannot be modiifed.
   * @public
   * @memberof OptionManager#
   */
  setAll: function(options, target) {
    return this._setAll(options, target);
  },

  _set: function(name, value, target, allowUnmodifiable) {
    var option = this.options[name];
    if (!option) {
      throw new Error('Invalid option: ' + name);
    }
    if (!option.modifiable && !allowUnmodifiable) {
      throw new Error('Option cannot be modified: ' + name);
    }

    return OptionManager._set(option, value, target);
  },

  _setAll: function(options, target, allowUnmodifiable) {
    if (!options) {
      return false;
    }

    var name;
    var changed = false;

    for (name in options) {
      if (Utilities.hasOwn(options, name) && this._set(name, options[name], target, allowUnmodifiable)) {
        changed = true;
      }
    }

    return changed;
  }

}, {

  _createAccessor: function(option, target, changeHandler) {
    var descriptor = {
      get: function() {
        return OptionManager._get(option, target);
      }
    };

    if (option.modifiable) {
      descriptor.set = function(value) {
        if (OptionManager._set(option, value, target)) {
          changeHandler(value, option);
        }
      };
    }

    Object.defineProperty(target, option.name, descriptor);
  },

  _get: function(option, target) {
    return target['_' + option.name];
  },

  _set: function(option, value, target) {
    var fieldName = '_' + option.name;
    var oldValue = target[fieldName];
    var newValue = option.transform(value != null ? value : option.defaultValue);

    target[fieldName] = newValue;

    return newValue !== oldValue;
  }

});

module.exports = OptionManager;

/**
 * Called whenever the value of a modifiable {@link Option} is changed on a target object via the defined property's
 * setter.
 *
 * @callback OptionManager~ChangeHandler
 * @param {*} value - the new value for <code>option</code> on the target object
 * @param {Option} option - the modifable {@link Option} whose value has changed on the target object.
 * @return {void}
 */
