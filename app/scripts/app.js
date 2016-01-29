define([
    "jquery",
    "underscore",
    "backbone",
    "marionette",
    "regions/mainRegion",
    'views/mainGrid',
    "routers/router",
    "cloudinary",
    "bootstrap",
    "migrate",
    "modernizr",
    "cookie",
    "retina",
    "jquery-ui",
    "scrollTo-min",
    "easing",
    "appear",
    "imagesloaded",
    "jflickrfeed",
    "flexslider",
    "isotope",
    "queryloader2",
    "gmap",
    "nicescroll",
    "fitvids",
    "magnific-popup",
    "YTPlayer",
    "mousewheel",
    "lazyload",
],

function ($, _, Backbone, Marionette, mainRegion, MainGrid, Router, Cloudinary) {

    var App = new Backbone.Marionette.Application();

    // An init function for your main application object
    App.addInitializer(function () {
        this.root = '/';
    });
    var router = new Router();
    // Add as many of these as you like
    App.addInitializer(function () {

    });
    var cloudinary = new Cloudinary();
    cloudinary.config({ cloud_name: 'ajphotography', api_key: '868769421546832'});
    //$.cloudinary.config({ cloud_name: 'ajphotography', api_key: '868769421546832'})
    /*App.addRegions({
        mainRegion: mainRegion
    });

    App.mainRegion.show(new MainGrid());*/
    //var mainGrid = new MainGrid();

    // Return the instantiated app (there should only be one)
    return App;

});
