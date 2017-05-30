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
 * Manages multiple {@link Option} instances that are intended to be used by multiple implementations.
 *
 * Although the option definitions are shared between targets, the values are maintained on the targets themselves.
 *
 * While a value associated with each option can be changed on the target objects, the manager and the option
 * definitions themselves are immutable.
 *
 * @public
 */
class OptionManager {

  static _get(option, target) {
    return target[option.fieldName];
  }

  static _set(option, value, target) {
    const fieldName = option.fieldName;
    const oldValue = target[fieldName];
    const newValue = option.transform(value != null ? value : option.defaultValue);

    target[fieldName] = newValue;

    return newValue !== oldValue;
  }

  /**
   * Creates a new instance of {@link OptionManager} for the specified available <code>options</code>.
   *
   * @param {Option[]} options - the options to be used
   * @public
   */
  constructor(options) {
    this._options = {};

    options.forEach((option) => {
      this._options[option.name] = option;
    });
  }

  /**
   * Sets the default values for all of the available options on the <code>target</code> object provided.
   *
   * @param {Object} target - the object on which the default values are to be set for each available option
   * @return {void}
   * @public
   */
  applyDefaults(target) {
    const options = this._options;

    for (const name in options) {
      if (Utilities.hasOwn(options, name)) {
        const option = options[name];

        OptionManager._set(option, option.defaultValue, target);
      }
    }
  }

  /**
   * Returns whether an option with the specified <code>name</code> is available.
   *
   * @param {string} name - the name of the {@link Option} whose existence is to be checked
   * @return {boolean} <code>true</code> if an {@link Option} exists with <code>name</code>; otherwise
   * <code>false</code>.
   * @public
   */
  exists(name) {
    return this._options[name] != null;
  }

  /**
   * Returns the value of the option with the specified <code>name</code> on the <code>target</code> object provided.
   *
   * @param {string} name - the name of the {@link Option} whose value on <code>target</code> is to be returned
   * @param {Object} target - the object from which the value of the named {@link Option} is to be returned
   * @return {*} The value of the {@link Option} with <code>name</code> on <code>target</code>.
   * @public
   */
  get(name, target) {
    return OptionManager._get(this._options[name], target);
  }

  /**
   * Returns a copy of all of the available options on the <code>target</code> object provided.
   *
   * @param {Object} target - the object from which the option name/value pairs are to be returned
   * @return {Object.<string, *>} A hash containing the name/value pairs of all options on <code>target</code>.
   * @public
   */
  getAll(target) {
    const options = this._options;
    const result = {};

    for (const name in options) {
      if (Utilities.hasOwn(options, name)) {
        result[name] = OptionManager._get(options[name], target);
      }
    }

    return result;
  }

  /**
   * Sets the value of the option with the specified <code>name</code> on the <code>target</code> object provided to
   * <code>value</code>.
   *
   * This method will throw an error if <code>name</code> does not match an available option.
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
   * @throws {Error} If no {@link Option} is being managed with <code>name</code>.
   * @public
   */
  set(name, value, target) {
    const option = this._options[name];
    if (!option) {
      throw new Error(`Invalid option: ${name}`);
    }

    return OptionManager._set(option, value, target);
  }

  /**
   * Sets all of the specified <code>options</code> on the <code>target</code> object provided to their corresponding
   * values.
   *
   * This method will throw an error if any of the names within <code>options</code> does not match an available option.
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
   * @throws {Error} If no {@link Option} is being managed with for any of the names within <code>options</code>.
   * @public
   */
  setAll(options, target) {
    if (!options) {
      return false;
    }

    let changed = false;

    for (const name in options) {
      if (Utilities.hasOwn(options, name) && this.set(name, options[name], target)) {
        changed = true;
      }
    }

    return changed;
  }

  /**
   * Returns a copy of the available options for this {@link OptionManager}.
   *
   * @return {Option[]} The available options.
   * @public
   */
  get options() {
    return Object.values(this._options);
  }

}

export default OptionManager;
