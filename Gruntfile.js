module.exports = function (grunt) {

    var tasks = [
        'jshint',
        'uglify',
//        'replace',
        'copy'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*\n' +
            '* <%= pkg.name %> v.<%= pkg.version %>\n' +
            '* Wes Jones. MIT ' + new Date().getFullYear() + '\n' +
            '*/\n',
        wrapStart: '(function(exports, global){\n',
        wrapEnd: '\n}(this.<%= pkg.packageName %> = this.<%= pkg.packageName %> || {}, function() {return this;}()));\n',
        jshint: {
            // define the files to lint
            files: ['src/**/*.js', '!src/libs/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    loopfunc: true
                }
            }
        },
        uglify: {
            build: {
                options: {
                    mangle: false,
                    compress: false,
                    preserveComments: 'some',
                    beautify: true,
                    exportAll: true,
                    wrap: '<%= pkg.packageName %>',
                    banner: '<%= banner %>'
                },
                files: {
                    './build/<%= pkg.filename %>.js': [
                        'src/libs/**/*.js',
                        'src/engine.js',
                        'src/AniSprite.js'
                    ]
                }
            },
            sprite: {
                options: {
                    mangle: false,
                    compress: false,
                    preserveComments: 'some',
                    beautify: true,
                    exportAll: true,
                    banner: '<%= banner %><%= wrapStart %>',
                    footer: '<%= wrapEnd %>'
                },
                files: {
                    './build/SpriteMapper.js': [
                        'src/SpriteMapper.js'
                    ]
                }
            },
            jailBird: {
                options: {
                    mangle: false,
                    compress: false,
                    preserveComments: 'some',
                    beautify: true,
                    exportAll: true,
                    banner: '<%= banner %><%= wrapStart %>',
                    footer: '<%= wrapEnd %>'
                },
                files: {
                    './build/characters/jailBird/jailBird.js': [
                        'src/characters/jailBird/**/*.js'
                    ],
                    './build/characters/soundNinja/soundNinja.js': [
                        'src/characters/soundNinja/**/*.js'
                    ],
                    './build/characters/hulk/hulk.js': [
                        'src/characters/hulk/**/*.js'
                    ]
                }
            }
        },
//        replace: {
//            jailBird: {
//                options: {
//                    patterns: [
//                        {
//                            match: '',
//                            replacement: ""
//                        }
//                    ]
//                },
//                files: [
//                    {
//                        //                        expand: true,
//                        //                        flatten: true,
//                        src: ['src/characters/jailBird-sprite.png'],
//                        dest: 'build/characters/jailBird-sprite.png'
//                    }
//                ]
//            }
//        },
        copy: {
            all: {
                files: [
                    {expand: true, cwd:'src/characters/', src: ['**/*.png', '**/*.css'], dest: 'build/characters'}
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', tasks);

};