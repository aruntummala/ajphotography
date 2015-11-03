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
/*    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };*/
    grunt.initConfig({
        /*yeoman: yeomanConfig,
        bowerRequirejs: {
            target: {
              rjsConfig: 'app/scripts/config.js',
              options: {
                transitive: true
              }
            }
        },*/
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            livereload: {
                files: [
                    'app/templates/*.html',
                    'app/scripts/**/*.js',
                    '{.tmp,app}/styles/{,*/}*.css',
                    '{.tmp,app}/scripts/{,*/}*.js',
                    'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['livereload'],
                options: {
                    //livereload: true,
                    reload:true
                }
            },
            files: [
                'app/templates/*.html',
                'app/scripts/**/*.js'
            ],
            tasks: ['jshint']
        },
        connect: {
            options: {
                port: 8888,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost',
                //keepalive: true,
                livereload: true,
                open: 'http://localhost:8888'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app')
                        ];
                    },
                    livereload: true
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
                    out: 'build/scripts/main.js',
                    name: 'app',
                    optimize: 'none',
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
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
            dist: 'build/scripts/*.js'
        },
        useminPrepare: {
            html: 'app/index.html',
            options: {
                root: 'app',
                dest: 'build',
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
            dist: {
                files: {
                    'build/styles/main.css': [
                        'build/dist/*.css',
                        '.tmp/styles/{,*/}*.css',
                        'app/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: '*.html',
                    dest: 'build'
                }]
            }
        },
        handlebars: {
            options: {
                cwd: 'app/build/templates',
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('server', function(target) {
        grunt.log.write(target);
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
        //'bowerRequirejs',
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