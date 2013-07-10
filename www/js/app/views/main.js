define(['marionette', 'text!app/templates/main.htt'],function (Marionette, my_template_html) {
	var MainView = Marionette.ItemView.extend({
		watchID: undefined,
		template : function(serialized_model) {
		    return _.template(my_template_html, {});
		},
        initialize : function() {
			var view = this;
	     	this.watchID = navigator.accelerometer.watchAcceleration(
				function(acceleration){
					var offset = view.$el.offset();
					var css = {
						top:  Math.round(offset.top - acceleration.y),
						left: Math.round(offset.left - acceleration.x)
					};

					if(css.top < 0)
						css.top = 0;

					if(css.left < 0)
						css.left = 0;

					var $window = $(window);

					if(css.top > $window.height())
						css.top = $window.height();

					if(css.left > $window.width())
						css.left = $window.width();
					
					view.$el.offset(css);
				},
            	function(e){
            		console.log('error', e);
            	},
            	{frequency:1000}
            );
	    },
	    onClose: function(){
	    	navigator.accelerometer.clearWatch(this.watchID);
		}
	});

	return MainView;
});