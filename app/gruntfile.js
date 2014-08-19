module.exports = function (grunt) {
    var js_src_path = 'app/js/'
        sass_src_path = 'app/css/compass/css',
        html_src_path = 'app/',
        extensions = {
            "js": "*.js",
            "sass": "*.scss",
            "html": "*.html"
        },
        grunt_extensions = [
        'grunt-contrib-uglify',
        'grunt-contrib-concat',
        'grunt-contrib-watch',
        'grunt-contrib-jshint',
        'grunt-contrib-sass',
        'grunt-express-server'
        ];

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            express: {
                dev: {
                    options: {
                        script: 'index.js'
                    }
                }
            }
        });


        (function (){
            for(var i = 0; i < grunt_extensions.length; i++) {
                grunt.loadNpmTasks(grunt_extensions[i]);
            }
        })();

        grunt.registerTask('default', ['express']);

};