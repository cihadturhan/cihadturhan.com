 // Whole Gruntfile.js so far
module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*\n' + 
        ' * <%= pkg.name %> <%= pkg.version %>\n' + 
        ' * <%= pkg.description %>\n' + 
        ' *\n' + 
        ' * <%= pkg.homepage %>\n' + 
        ' *\n' + 
        ' * Copyright 2014-<%= grunt.template.today("yyyy") %>, <%= pkg.author %>\n' + 
        ' * Released on: <%= grunt.template.today("mmmm d, yyyy") %>\n' + 
        '*/\n',
        jshint: {
            // define the files to lint
            files: ['gruntfile.js', 'js/*.js', '!js/jquery*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        clean: {
            src: ['<%= pkg.dirs.css.dist[0] %>', '<%= pkg.dirs.css.dist[0] %>'],
        },
        uglify: {
            options: {
                sourceMap: false,
                sourceMapRoot: './',
                report: 'gzip',
                compress: true,
                banner: '<%= banner %>',
            },
            mangle: {toplevel: false},
            squeeze: {dead_code: false},
            codegen: {quote_keys: true},
            dist: {
                files: {
                    '<%= pkg.dirs.js.dist[0] %>':'<%= pkg.dirs.js.dev %>'
                }
            }
        },
        cssmin: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true,
                separator: ' \n',
                keepSpecialComments: 0
            },
            dist: {
                files: {
                    '<%= pkg.dirs.css.dist[0] %>': '<%= pkg.dirs.css.dev %>'
                }
            }
        },
        watch: {
            styles: {
                files: 'css/*.css',
                tasks: ['cssmin:dist']
            },
            scripts: {
                files: 'js/*.js',
                tasks: ['uglify']
            }
        }
    
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.registerTask('default', ['shell:echo']);
    grunt.registerTask('default', ['clean','uglify', 'cssmin']);
    grunt.registerTask('jsbuild', ['uglify']);
    grunt.registerTask('cssbuild', ['cssmin']);
};
