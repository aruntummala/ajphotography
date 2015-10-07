define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};

this["Handlebars"]["app/scripts/templates/mainGrid.html"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div>\n	<div class=\"row\">\n	  <div class=\"col-sm-6 col-md-3\">\n	    <div class=\"thumbnail\">\n	      <img class=\"placesImage\"  alt=\"Places\">\n	      <div class=\"caption\">Places\n	      </div>\n	    </div>\n	  </div>\n	  <div class=\"col-sm-6 col-md-3\">\n	    <div class=\"thumbnail\">\n	      <img class=\"peopleImage\" alt=\"People\">\n	      <div class=\"caption\">\n	        People\n	      </div>\n	    </div>\n	  </div>\n	</div>\n</div>";
},"useData":true});

this["Handlebars"]["app/scripts/templates/nav.html"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">AJPhotography</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">Home</a></li>\n            <li><a href=\"#about\">About Me</a></li>\n            <li><a href=\"#contact\">Contact</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>";
},"useData":true});

return this["Handlebars"];

});