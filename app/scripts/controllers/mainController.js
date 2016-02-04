define([
    'jquery',
    'marionette',
    'regions/mainRegion',
    'templates',
    'views/mainGrid',
    'views/header'
], function ($, Marionette, MainRegion, Mytemplates, MainGridView, HeaderView) {
    var MainController = Marionette.Object.extend({
        initialize: function () {
            //MainRegion.show(new GridView());
        },
        home: function () {
            new MainGridView({
                showing: 'home'
            });
            new HeaderView();
        },
        showKenburns: function () {
            var mainGrid = new MainGridView({
                template: Mytemplates["gallery_kenburns.html"],
                showing: 'kenburns'
            });
        },
        showIsotopeGallery: function () {
            var mainGrid = new MainGridView({
                template: Mytemplates["isotopeGallery.html"],
                showing: 'gallery'
            });
        }
    });
    return MainController;
});