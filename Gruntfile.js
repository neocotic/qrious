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
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dist: {
        options: {
          banner: [
            '/*',
            ' * QRious',
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
          ].join('\n'),
          browserifyOptions: {
            debug: true,
            standalone: 'QRious'
          },
          external: [ 'canvas' ],
          transform: [
            [ 'babelify', { comments: false } ]
          ]
        },
        files: {
          'dist/qrious.js': [ 'src/index.js' ]
        }
      }
    },

    eslint: {
      target: [ 'src/**/*.js' ]
    },

    uglify: {
      all: {
        files: {
          'dist/qrious.min.js': 'dist/qrious.js'
        },
        options: {
          banner: [
            '/*! QRious v<%= pkg.version %> | (C) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | GPL v3 License',
            'jsqrencode | (C) 2010 tz@execpc.com | GPL v3 License',
            '*/'
          ].join('\n'),
          report: 'min',
          sourceMap: true,
          sourceMapName: 'dist/qrious.min.map'
        }
      }
    }
  })

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('default', [ 'test' ])
  grunt.registerTask('build', [ 'eslint', 'browserify' ])
  grunt.registerTask('dist', [ 'build', 'uglify' ])
  grunt.registerTask('test', [ 'eslint' ])
}
