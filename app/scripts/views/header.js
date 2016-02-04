define([
    'jquery',
    'backbone',
    'marionette',
    'templates'
    ], function ($, Backbone, Marionette, Mytemplates) {
    var Header = Backbone.Marionette.ItemView.extend({
        template: Mytemplates["nav.html"],
        el: '.appHeader',
        initialize: function () {
            var me = this;
            me.render();
        },
        onRender :function() {
            var win_h = $(window).height(),
                win_w = $(window).width(),
                home_slides_arr = [],
                is_moving = false;
            $("body").fitVids();
             /*==========================================================================================================================================
            /*==========================================================================================================================================
                Header
            ============================================================================================================================================
            ============================================================================================================================================*/
            // Dropdown effect
            $("header nav li").hover(function () {
                if ($(this).children('ul').length > 0 && !$(".mobile-navigation").is(':visible')) {
                    var children = $(this).find('> ul'),
                        elem = $(this),
                        elemOff = parseInt($(this).offset().left),
                        elemWidth = elem.width();
                    if ((elemOff + 200 + elemWidth) > win_w) {
                        children.addClass('edge');
                    }
                    $(this).find('> ul').fadeIn(300);
                }
            }, function () {
                if ($(this).children('ul').length > 0 && !$(".mobile-navigation").is(':visible')) {
                    $(this).find('> ul').stop().fadeOut(300);
                }
            });
            // Unfolding sub-menus in responsive mode.
            $("header nav li a").click(function (event) {
                event.preventDefault();
                if ($(this).parent().children('ul').length > 0 && $(".mobile-navigation").is(':visible')) {
                    event.preventDefault();
                    $(this).parent().find('> ul').slideToggle(300);
                }
            });
            // Adding Scrollbar
            if ($("header").length > 0 && win_w <= 1024) {
                $("header nav").niceScroll({
                    mousescrollstep: 60,
                    cursorcolor: "#959595",
                    cursorborder: "0px solid #fff",
                });
            }
            // Mobile navigation
            $(".mobile-navigation").click(function (event) {
                event.preventDefault();
                $("header nav").slideToggle(100);
            });
            // Adding arrows for mobile menu
            if ($("header").length > 0) {
                $("header nav .mCSB_container > ul > li > a").each(function (index, el) {
                    if (win_w <= 1024 && $(this).parent().children('ul').length > 0) {
                        $(this).append('<span class="arrow-down icon1-chevron-down"></span>');
                    }
                });
            }
        }
    });
    return Header;
});