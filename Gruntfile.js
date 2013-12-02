module.exports = function(grunt) {

  'use strict';

  // Configuration
  // -------------

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    docco: {
      all: {
        options: {
          output: 'docs'
        },
        src: 'qr.js'
      }
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'qr.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    uglify: {
      all: {
        files: {
          'qr.min.js': 'qr.js'
        },
        options: {
          banner: (
            '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %>' +
            ' <%= pkg.author.name %> | <%= pkg.licenses[0].type %> License \n' +
            'jsqrencode | (c) 2010 tz@execpc.com | GPL v3 License\n' +
            '*/'
          ),
          report: 'min',
          sourceMap: 'qr.min.map'
        }
      }
    }

  });

  // Tasks
  // -----

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-docco');

  grunt.registerTask('default', [ 'test' ]);
  grunt.registerTask('dist', [ 'uglify', 'docco' ]);
  grunt.registerTask('test', [ 'jshint' ]);

};
