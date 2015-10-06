// Generated on 2015-09-16 using generator-maryo 0.1.16
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };
    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            livereload: {
                files: [
                    'app/*.html',
                    '{.tmp,app}/styles/{,*/}*.css',
                    '{.tmp,app}/scripts/{,*/}*.js',
                    'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['livereload']
            }
        },
        connect: {
            options: {
                port: 8888,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:8888'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'build/*',
                        '!build/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
            ]
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'app/scripts',
                    mainConfigFile: "app/scripts/config.js",
                    out: 'app/scripts/dist/main.js',
                    name: 'app'
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        'build/scripts/{,*/}*.js',
                        'build/styles/{,*/}*.css',
                        'build/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        'build/styles/fonts/*'
                    ]
                }
            }
        },
        concat: {
            options: {
                stripBanners: true
            },
            dist: {}
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            dist: 'app/scripts/dist/main.js'
        },
        useminPrepare: {
            html: 'app/index.html',
            options: {
                root: 'app',
                dest: 'app/dist',
                staging: 'app/dist/.tmp',
                flow: {
                    steps: {
                        js: ['concat', 'uglify'],
                        css: ['concat', 'cssmin'],
                        copy: ['concat']
                    }
                }
            }
        },
        usemin: {
            html: ['build/{,*/}*.html'],
            css: ['build/styles/{,*/}*.css'],
            options: {
                dirs: ['build']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: 'build/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/images',
                    src: '{,*/}*.svg',
                    dest: 'build/images'
                }]
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
                keepBreaks: false,
                advanced: false
            },
            dist: {}
        },
        htmlmin: {
            dist: {
                /*files: [{
                    expand: true,
                    cwd: 'app',
                    src: '*.html',
                    dest: 'build'
                }]*/
            }
        },
        handlebars: {
            options: {
                cwd: 'app/scripts/templates',
                amd: true,
                commonjs: false,
                namespace: 'Handlebars'
            },
            all: {
                files: {
                    'app/scripts/templates.js': ['app/scripts/templates/*.html']
                }
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'build',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/*'
                    ]
                }]
            }
        },
        concurrent: {
            server: [

            ],
            test: [

            ],
            dist: [
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });
    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }
        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',
    ]);
    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'handlebars',
        'requirejs',
        'cssmin',
        'concat',
        'uglify',
        'copy',
        'rev',
        'usemin'
    ]);
    grunt.registerTask('default', [
        'test',
        'build'
    ]);
};