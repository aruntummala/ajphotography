define([
	'backbone',
	'marionette',
	'templates'
	], function(Backbone, Marionette, Handlebars) {
    var MainGrid = Backbone.Marionette.ItemView.extend({
        template: Handlebars['app/scripts/templates/mainGrid.html'](),
        className:'outer_wrapper',
        events:{
        	'click .back': 'showImage'
        },
        initialize: function() {
        	console.log("mainGrid");
        },
        showImage: function() {
        	$('#imagepreview').attr('src', 'images/catalinaisland.jpg'); 
        	$('#imagemodal').modal('show');
        },
        onShow: function() {
        	/*$('.outer_wrapper').smartEl({
        		columns: 13,
        		rows: 13,
        		position: 'relative',
        		color:'#c0c0c0'
        	});*/
        	/*function blink(){
        		var el = $('.r'+Math.floor(2 +Math.random()*11) +'c'+Math.floor(2 +Math.random()*11));
        		el.hover();
        		el.mouseenter();
        		console.log("blinking");
        	}
        	setInterval(blink, 1000);*/
        }
    });
    return MainGrid;
});