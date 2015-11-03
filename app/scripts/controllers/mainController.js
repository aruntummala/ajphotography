define([
    'jquery',
    'marionette',
    'regions/mainRegion',
    'handlebars',
    'views/mainGrid',
    'text!templates/gallery_kenburns.html',
    'text!templates/isotopeGallery.html'
], function($, Marionette, MainRegion, Handlebars, MainGridView, MainGridTemplate, Isotope) {
    var MainController = Marionette.Object.extend({
        initialize: function() {
            //MainRegion.show(new GridView());
        },
        home: function() {
            new MainGridView({
                showing: 'home'
            });
        },
        showKenburns: function() {
            var mainGrid = new MainGridView({
                template: Handlebars.compile($($.parseHTML(MainGridTemplate)).filter("#galleryKenburns").html()),
                showing: 'kenburns'
            });
        },
        showIsotopeGallery: function() {
            var mainGrid = new MainGridView({
                template: Handlebars.compile($($.parseHTML(Isotope)).filter("#isotopeGallery").html()),
                showing: 'gallery'
            });
        }
    });
    return MainController;
});