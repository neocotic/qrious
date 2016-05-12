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
      build: {
        options: {
          browserifyOptions: {
            debug: true,
            standalone: 'QRious'
          },
          external: [ 'canvas' ],
          transform: [
            [ 'babelify' ]
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

    exorcise: {
      build: {
        files: {
          'dist/qrious.map': [ 'dist/qrious.js' ]
        }
      }
    },

    uglify: {
      dist: {
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
  grunt.registerTask('build', [ 'eslint', 'browserify', 'exorcise' ])
  grunt.registerTask('dist', [ 'build', 'uglify' ])
  grunt.registerTask('test', [ 'eslint' ])
}
