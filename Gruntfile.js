module.exports = function(grunt) {

    grunt.initConfig({
        react: {
            files: {
                expand: true,
                cwd: './jsx',
                src: ['**/*.jsx'],
                dest: './public/js/app/',
                ext: '.js'
            }
        },
        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            app: {
                src: 'path/to/source/main.js',
                dest: 'path/to/target/output.js'
            }
        },
        express: {
            dev: {
                options: {
                    script: './server.js'
                }
            }
        },
        watch: {
            express: {
                files: ['./jsx/**/*.jsx', 'public/**/*.css'],
                tasks: ['browserify', 'express:dev'],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('server', ['react', 'express:dev', 'watch' ]);

    grunt.registerTask('default', ['server']);

};
