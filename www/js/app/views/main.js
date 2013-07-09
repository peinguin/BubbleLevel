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
					view.$el.offset(css);
				},
            	function(e){
            		console.log('error', e);
            	},
            	{frequency:100}
            );
	    },
	    onClose: function(){
	    	navigator.accelerometer.clearWatch(this.watchID);
		}
	});

	return MainView;
});