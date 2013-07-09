define(['marionette', 'app/views/main'], function (Marionette, MyView) {

		var BubbleLevel = new Marionette.Application();

		BubbleLevel.addRegions({
		 	mainView : '#mainView'
		});

		BubbleLevel.addInitializer(function(options){
            var myView = new MyView();console.log(myView);
            BubbleLevel.mainView.show(myView);
		});

		BubbleLevel.addInitializer(function(options){
			Backbone.history.start();
		});

		BubbleLevel.on('initialize:after', function(){});

		return BubbleLevel;
	}
);