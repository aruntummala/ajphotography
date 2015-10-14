define([
    'backbone',
    'marionette',
    'templates',
    'blueimp'
    ], function(Backbone, Marionette, Handlebars, blueimp) {
    var MainGrid = Backbone.Marionette.ItemView.extend({
        template: Handlebars['app/scripts/templates/mainGrid.html'](),
        className:'outer_wrapper',
        events:{
            'click .back': 'showImage'
        },
        initialize: function() {
            console.log("mainGrid");
            $('#blueimp-gallery').data('fullScreen', 'true');
            $('#links').on('click', function (event) {
                event.preventDefault();
                event = event || window.event;
                var target = event.target || event.srcElement,
                    link = target.src ? target.parentNode : target,
                    options = {index: link, event: event},
                    links = this.getElementsByTagName('a');
                blueimp(links, options);
            });
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