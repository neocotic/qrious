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

/* eslint no-multi-spaces: "off" */

var Nevis = require('nevis/lite');

/**
 * Contains alignment pattern information.
 *
 * @public
 * @class
 * @extends Nevis
 */
var Alignment = Nevis.extend(null, {

  /**
   * The alignment pattern block.
   *
   * @public
   * @static
   * @type {number[]}
   * @memberof Alignment
   */
  BLOCK: [
    0,  11, 15, 19, 23, 27, 31,
    16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24,
    26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28
  ]

});

module.exports = Alignment;
