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

module.exports = function(grunt) {
  var babel = require('rollup-plugin-babel');
  var commonjs = require('rollup-plugin-commonjs');
  var nodeResolve = require('rollup-plugin-node-resolve');
  var uglify = require('rollup-plugin-uglify');

  var bannerLarge = [
    '/*',
    ' * QRious v<%= pkg.version %>',
    ' * Copyright (C) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>',
    ' * Copyright (C) 2010 Tom Zerucha',
    ' *',
    ' * This program is free software: you can redistribute it and/or modify',
    ' * it under the terms of the GNU General Public License as published by',
    ' * the Free Software Foundation, either version 3 of the License, or',
    ' * (at your option) any later version.',
    ' *',
    ' * This program is distributed in the hope that it will be useful,',
    ' * but WITHOUT ANY WARRANTY; without even the implied warranty of',
    ' * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the',
    ' * GNU General Public License for more details.',
    ' *',
    ' * You should have received a copy of the GNU General Public License',
    ' * along with this program.  If not, see <http://www.gnu.org/licenses/>.',
    ' */'
  ].join('\n');
  var bannerSmall = [
    '/*! QRious v<%= pkg.version %> | (C) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | GPL v3 License',
    'Based on jsqrencode | (C) 2010 tz@execpc.com | GPL v3 License',
    '*/'
  ].join('\n');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: [ 'dist/**' ]
    },

    eslint: {
      target: [ 'src/**/*.js' ]
    },

    rollup: {
      cjs: {
        options: {
          format: 'cjs',
          sourceMap: true,
          sourceMapRelativePaths: true,
          banner: bannerLarge,
          external: [ 'canvas' ],
          plugins: function() {
            return [
              nodeResolve({
                jsnext: true,
                main: true
              }),
              commonjs(),
              babel({
                exclude: [ 'node_modules/**' ],
                runtimeHelpers: true
              })
            ];
          }
        },
        files: {
          'dist/cjs/qrious.js': 'src/runtime/node.js'
        }
      },
      umdDevelopment: {
        options: {
          format: 'umd',
          moduleId: 'qrious',
          moduleName: 'QRious',
          sourceMap: true,
          sourceMapRelativePaths: true,
          banner: bannerLarge,
          plugins: function() {
            return [
              nodeResolve({
                jsnext: true,
                main: true
              }),
              commonjs(),
              babel({
                exclude: [ 'node_modules/**' ],
                runtimeHelpers: true
              })
            ];
          }
        },
        files: {
          'dist/umd/qrious.js': 'src/runtime/browser.js'
        }
      },
      umdProduction: {
        options: {
          format: 'umd',
          moduleId: 'qrious',
          moduleName: 'QRious',
          sourceMap: true,
          sourceMapRelativePaths: true,
          banner: bannerSmall,
          plugins: function() {
            return [
              nodeResolve({
                jsnext: true,
                main: true
              }),
              commonjs(),
              babel({
                exclude: [ 'node_modules/**' ],
                runtimeHelpers: true
              }),
              uglify({
                output: {
                  comments: function(node, comment) {
                    return comment.type === 'comment2' && /^\!/.test(comment.value);
                  }
                }
              })
            ];
          }
        },
        files: {
          'dist/umd/qrious.min.js': 'src/runtime/browser.js'
        }
      }
    },

    watch: {
      all: {
        files: [ 'src/**/*.js' ],
        tasks: [ 'eslint' ]
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [ 'ci' ]);
  grunt.registerTask('build', [ 'eslint', 'clean:build', 'rollup' ]);
  grunt.registerTask('ci', [ 'eslint', 'clean', 'rollup' ]);
  grunt.registerTask('test', [ 'eslint' ]);
};
