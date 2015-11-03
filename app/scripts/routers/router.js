define([
    "backbone",
    "marionette",
    "controllers/mainController"
], function (Backbone, Marionette, MainController) {
    var Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            "": "home",
            "home": "home",
            "kenburns": "showKenburns",
            "gallery": "showIsotopeGallery"
        },
        controller: new MainController()
    });
    return Router;
});