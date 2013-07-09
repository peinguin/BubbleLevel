define(['marionette', 'app/views/main'], function (Marionette, MyView) {

		var BubbleLevel = new Marionette.Application();

		BubbleLevel.addRegions({
		 	mainView : '#mainView'
		});

		BubbleLevel.addInitializer(function(options){
			navigator.accelerometer.getCurrentAcceleration(
				function(coords){
					coords.toJSON = function(){
						return JSON.stringify({
							"timestamp": this.timestamp,
							"x": this.x,
							"y": this.y,
							"z": this.z
						});
					}
					var myView = new MyView({model:coords});
					BubbleLevel.mainView.show(myView);
				},
				function(){navigator.notification.alert('accelerometer failed');}
			);
		});

		BubbleLevel.addInitializer(function(options){
			Backbone.history.start();
		});

		BubbleLevel.on('initialize:after', function(){});

		return BubbleLevel;
	}
);