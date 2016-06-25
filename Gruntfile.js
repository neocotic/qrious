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

module.exports = function(grunt) {
  var babel = require('rollup-plugin-babel')
  var nodeResolve = require('rollup-plugin-node-resolve')
  var uglify = require('rollup-plugin-uglify')

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
  ].join('\n')
  var bannerSmall = [
    '/*! QRious v<%= pkg.version %> | (C) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | GPL v3 License',
    'Based on jsqrencode | (C) 2010 tz@execpc.com | GPL v3 License',
    '*/'
  ].join('\n')

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: [ 'dist' ]
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
          plugins: function() {
            return [
              babel({
                exclude: './node_modules/**',
                presets: [ 'es2015-rollup' ],
                babelrc: false
              }),
              nodeResolve({
                browser: true,
                jsnext: true,
                skip: [ 'canvas' ]
              })
            ]
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
              babel({
                exclude: './node_modules/**',
                presets: [ 'es2015-rollup' ],
                babelrc: false
              }),
              nodeResolve({
                main: true,
                jsnext: true
              })
            ]
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
              babel({
                exclude: './node_modules/**',
                presets: [ 'es2015-rollup' ],
                babelrc: false
              }),
              nodeResolve({
                browser: true,
                jsnext: true
              }),
              uglify({
                output: {
                  comments: function(node, comment) {
                    return comment.type === 'comment2' && /^\!/.test(comment.value)
                  }
                }
              })
            ]
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
        tasks: [ 'build' ]
      }
    }
  })

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('default', [ 'build' ])
  grunt.registerTask('build', [ 'eslint', 'clean', 'rollup' ])
  grunt.registerTask('test', [ 'eslint' ])
}
