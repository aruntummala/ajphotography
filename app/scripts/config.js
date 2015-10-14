requirejs.config({
    deps: [
        'main'
    ],
    paths: {
        backbone: '../bower_components/backbone/backbone',
        jquery: '../bower_components/jquery/dist/jquery',
        marionette: '../bower_components/marionette/lib/core/backbone.marionette',
        underscore: '../bower_components/underscore/underscore',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.eventbinder': '../bower_components/backbone.eventbinder/lib/backbone.eventbinder',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/text/text',
        templates: 'templates',
        smartEl: 'util/smartEl',
        lodash: '../bower_components/lodash/lodash',
        'marionette-dust': '../bower_components/marionette-dust/src/backbone.marionette.dust',
        requirejs: '../bower_components/requirejs/require',
        blueimp: '../bower_components/blueimp-gallery/js/blueimp-gallery',
        'blueimp-helper': '../bower_components/blueimp-gallery/js/blueimp-helper',
        'blueimp-bootstrap-image-gallery': '../bower_components/blueimp-bootstrap-image-gallery/js/bootstrap-image-gallery',
        'blueimp-gallery': '../bower_components/blueimp-gallery/js/blueimp-gallery',
        'blueimp-gallery-fullscreen': '../bower_components/blueimp-gallery/js/blueimp-gallery-fullscreen',
        'blueimp-gallery-indicator': '../bower_components/blueimp-gallery/js/blueimp-gallery-indicator',
        'blueimp-gallery-video': '../bower_components/blueimp-gallery/js/blueimp-gallery-video',
        'blueimp-gallery-vimeo': '../bower_components/blueimp-gallery/js/blueimp-gallery-vimeo',
        'blueimp-gallery-youtube': '../bower_components/blueimp-gallery/js/blueimp-gallery-youtube'
    },
    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        marionette: {
            deps: [
                'backbone'
            ],
            exports: 'Marionette'
        },
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: [
                'jquery'
            ],
            exports: 'bootstrap'
        },
        smartEl: {
            deps: [
                'jquery'
            ],
            exports: 'SmartEl'
        },
        blueimp: {
            exports: 'blueimp',
            deps: [
                'blueimp-helper'
            ]
        }
    },
    packages: [

    ]
});