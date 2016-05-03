module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/qrious.js': 'src/index.js'
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
          banner:
            '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %>' +
            ' <%= pkg.author.name %> | GPL v3 License\n' +
            'jsqrencode | (c) 2010 tz@execpc.com | GPL v3 License\n' +
            '*/',
          report: 'min',
          sourceMap: true,
          sourceMapName: 'dist/qrious.min.map'
        }
      }
    }
  })

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('default', [ 'test' ])
  grunt.registerTask('build', [ 'eslint', 'babel' ])
  grunt.registerTask('dist', [ 'build', 'uglify' ])
  grunt.registerTask('test', [ 'eslint' ])
}
