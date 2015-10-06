requirejs.config({
    deps: ['main'],
    paths: {
        backbone: '../bower_components/backbone/backbone',
        jquery: '../bower_components/jquery/dist/jquery',
        marionette: '../bower_components/marionette/lib/core/backbone.marionette',
        underscore: '../bower_components/lodash/lodash',
        'backbone.wreqr' : '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.eventbinder' : '../bower_components/backbone.eventbinder/lib/backbone.eventbinder',
        'backbone.babysitter' : '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        //templates: 'templates/compiled',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/text/text',
        templates: 'templates',
        smartEl: 'util/smartEl'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        smartEl: {
            deps: ['jquery'],
            exports: 'SmartEl'
        }
    }
});
