define([
    'jquery',
    'marionette',
    'regions/mainRegion',
    'views/mainGrid',
], function ($, Marionette, MainRegion, MainGrid) {
    var MainController = Marionette.Object.extend({
        initialize: function() {    
            //MainRegion.show(new GridView());
        },
        home: function() {
            //MainRegion.show(new MainGrid());
        }

    });
    return MainController;
});