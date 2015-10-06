define([
    "underscore",
    "backbone",
    "marionette",
    "regions/mainRegion",
    'views/mainGrid',
    "routers/router",
    "bootstrap",
],

function (_, Backbone, Marionette, mainRegion, MainGrid, Router) {

    var App = new Backbone.Marionette.Application();

    // An init function for your main application object
    App.addInitializer(function () {
        this.root = '/';
    });
    var router = new Router();
    // Add as many of these as you like
    App.addInitializer(function () {

    });
    App.addRegions({
        mainRegion: mainRegion
    });

    App.mainRegion.show(new MainGrid());

    // Return the instantiated app (there should only be one)
    return App;

});
