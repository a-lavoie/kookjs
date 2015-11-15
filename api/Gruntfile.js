module.exports = function(grunt) {

  grunt.initConfig({
    run: {
       start_mocha_test: {
          // mocha --debug-brk tests/index.js
          exec: 'sleep 1 && cd ../tests && mocha -R spec index.js',
          options: {
             ready: 3000  
          }
       }
    },

    watch: {

      run_mocha_on_changes: {
         files: ['../tests/index.js', '**/*.js'],
         tasks: ['run:start_mocha_test'],
         options: {
            spawn: false
         }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-run');
  grunt.registerTask('default', ['watch:run_mocha_on_changes']);

};
