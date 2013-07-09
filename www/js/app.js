requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-2.0.3.min',
        backbone: 'backbone-min',
        underscore: 'underscore-min',
        marionette: 'backbone.marionette.min'
    },
    shim: {
    	jquery : {
	    	exports : 'jQuery'
	    },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        marionette : {
	    	deps : ['jquery', 'underscore', 'backbone'],
	    	exports : 'Marionette'
	    }
    }
});

requirejs(['app/main']);