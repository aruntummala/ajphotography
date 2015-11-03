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
        migrate: '../js/migrate-1.2.1.min',
        modernizr: '../js/modernizr-respond',
        cookie: '../js/cookie',
        retina: '../js/retina',
        'jquery-ui': '../js/jquery-ui/jquery-ui.min',
        'scrollTo-min': '../js/scrollTo-min',
        easing: '../js/easing.1.3',
        appear: '../js/appear',
        imagesloaded: '../js/imagesloaded.pkgd.min',
        jflickrfeed: '../js/jflickrfeed.min',
        flexslider: '../js/flexslider/flexslider.min',
        isotope: '../bower_components/isotope/dist/isotope.pkgd.min',
        queryloader2: '../js/queryloader2.min',
        gmap: '../js/gmap.min',
        nicescroll: '../js/nicescroll.min',
        fitvids: '../js/fitvids',
        'magnific-popup': '../js/Magnific-Popup/magnific-popup.min',
        YTPlayer: '../js/mb.YTPlayer/inc/mb.YTPlayer',
        mousewheel: '../js/mousewheel.min',
        lazyload: '../js/lazyload.min',
        scripts: '../js/scripts'
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
        },
        migrate: {
            deps: [
                'jquery'
            ],
            exports: 'migrate'
        },
        modernizr: {
            exports: 'Modernizr'
        },
        isotope: {
            exports: 'isotope',
            deps: [
                'jquery'
            ]
        },
        scripts: {
            deps: [
                'migrate',
                'modernizr',
                'cookie',
                'retina',
                'jquery-ui',
                'scrollTo-min',
                'easing',
                'appear',
                'imagesloaded',
                'jflickrfeed',
                'flexslider',
                'isotope',
                'queryloader2',
                'gmap',
                'nicescroll',
                'fitvids',
                'magnific-popup',
                'YTPlayer',
                'mousewheel',
                'lazyload'
            ]
        }
    },
    packages: [

    ]
});