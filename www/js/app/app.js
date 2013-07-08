define(
	[
		'marionette'
	]
	function (Marionette) {

console.log(_)
console.log($)
console.log(Backbone)
console.log(Marionette)

		var BubbleLevel = new Marionette.Application();

		BubbleLevel.addRegions({
		  mainView : '#mainView'
		});

		BubbleLevel.on('initialize:after', function(){
		 	Backbone.history.start();
		});

		return{
			initialize: function(){
				BubbleLevel.start();
			}
		}
	}
);