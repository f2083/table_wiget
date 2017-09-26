module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      browserify: {
        files: ['src/js/**/*.js'],
        tasks: ['eslint','browserify']
      }
    },

    browserify: {
      dist: {
        options: {
           transform: [['babelify', {presets: ['es2015', 'react']}]]
        },        
        src: ['src/js/*.js'],
        dest: 'public/scripts/app.js',
      }
    },
    
    eslint: {
        target: ['src/js/**/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['browserify']);


};