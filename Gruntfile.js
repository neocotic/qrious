module.exports = function(grunt) {

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

    uglify: {
      all: {
        files: {
          'qr.min.js': 'qr.js'
        },
        options: {
          banner: (
              '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | <%= pkg.licenses[0].type %> License'
            + '\njsqrencode | (c) 2010 tz@execpc.com | GPL v3 License'
            + '\n*/'
          ),
          report: 'min',
          sourceMap: 'qr.min.map'
        }
      }
    }

  });

  // Tasks
  // -----

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-docco');

  grunt.registerTask('dist', [ 'uglify', 'docco' ]);

};
