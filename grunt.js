module.exports = function(grunt) {

    var tasks = 'lint min';
    var version = require('./package.json').version;

    var sources = [
        './lib/asyncall.js'
    ];

    var options = {
        lint: {
            files : sources
        },
        min: {}
    };

    options.min['./lib/asyncall-' + version + '.min.js'] = sources;

    grunt.initConfig(options);
    grunt.registerTask('default', tasks);
};