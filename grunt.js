module.exports = function(grunt) {

    var sources = [
        './lib/asyncall.js'
    ];

    var tasks = 'lint min';

    grunt.initConfig({
        lint: {
            files : sources
        },
        min: {
            'asyncall.min.js': sources
        }
    });

    grunt.registerTask('default', tasks);
};