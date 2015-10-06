(function ( $ ) {
 
    $.fn.smartEl = function( options ) {
        
        console.log(this);
        var outerGrid = this.append("<div class='outer_wrapper_grid'></div>");
        var leftTopCornerCard = 
          "<div class='flip-container' ontouchstart='this.classList.toggle('hover');'>"+
            "<div class='flipper'>"+
              "<div class='front'>"+
              "</div>"+
              "<div class='back'>"+
              "</div>"+
            "</div>"+
          "</div>";
        //outerGrid.append('<div class="row_"'+options.rows[i]'></div>');
        var rows = [];
        var columns = [];
        rows.length = options.rows;
        columns.length = options.columns;
        var row;
        $.each(rows, function(index, value) {
          row = $('.outer_wrapper_grid').append('<div class="row row_'+index+'"></div>');
          var rowIndex = index;
            $.each(columns, function(index, value) {
                $('.row_'+rowIndex).append(
                   '<div class="flip-container r'+rowIndex+'c'+index+' " ontouchstart="this.classList.toggle("hover");">'+
                    "<div class='flipper'>"+
                      "<div class='front'>"+
                      "</div>"+
                      "<div class='back'>"+
                      "</div>"+
                    "</div>"+
                  "</div>");
            });
        });
        console.log(options);
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );
 
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
 
    };
 
}( jQuery ));