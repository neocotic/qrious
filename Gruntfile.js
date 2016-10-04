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
  var babel
  var commonjs
  var nodeResolve
  var semver = require('semver')
  var uglify

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

    watch: {
      all: {
        files: [ 'src/**/*.js' ],
        tasks: [ 'test' ]
      }
    }
  })

  var buildTasks = [ 'compile' ]
  var compileTasks = []
  var testTasks = [ 'compile' ]

  if (semver.satisfies(process.version, '>=0.12')) {
    babel = require('rollup-plugin-babel')
    commonjs = require('rollup-plugin-commonjs')
    nodeResolve = require('rollup-plugin-node-resolve')
    uglify = require('rollup-plugin-uglify')

    compileTasks.push('clean', 'rollup')

    grunt.config.merge({
      clean: {
        build: [ 'dist/**' ]
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
                  main: true,
                  skip: [ 'canvas' ]
                }),
                commonjs(),
                babel({
                  exclude: [ 'node_modules/**' ],
                  runtimeHelpers: true
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
                nodeResolve({
                  jsnext: true,
                  main: true
                }),
                commonjs(),
                babel({
                  exclude: [ 'node_modules/**' ],
                  runtimeHelpers: true
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
      }
    })

    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-rollup')
  } else {
    grunt.log.writeln('"clean" and "rollup" tasks are disabled because Node.js version is <0.12! Please consider upgrading Node.js...')
  }

  if (semver.satisfies(process.version, '>=4')) {
    compileTasks.unshift('eslint')

    grunt.config.set('eslint', {
      target: [ 'src/**/*.js' ]
    })

    grunt.loadNpmTasks('grunt-eslint')
  } else {
    grunt.log.writeln('"eslint" task is disabled because Node.js version is <4! Please consider upgrading Node.js...')
  }

  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', [ 'build' ])
  grunt.registerTask('build', buildTasks)
  grunt.registerTask('compile', compileTasks)
  grunt.registerTask('test', testTasks)
}
