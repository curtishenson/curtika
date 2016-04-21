/*global module:true*/
module.exports = function (grunt) {

  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    // default watch configuration
    watch: {
      sass: {
        files: ['public/_scss/**/*.scss'],
        tasks: ['sass']
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'auto'
        },
        files: {
          'public/assets/css/main.css': 'public/_scss/main.scss'
        }
      }
    },

    browserSync: {
      bsFiles: {
        src : ['public/assets/css/*.css', 'public/assets/js/**/*.js', 'craft/templates/**/*.twig']
      },
      options: {
        watchTask: true,
        // proxy: "factory.dev", // if you use localhost it may not work, use 127.0.0.1 instead
        // for static sites only
        server: {
          baseDir: "./public",
        }
      }
    }

  });

  grunt.registerTask('server', [
    'sass',
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('default', ['server']);

};
