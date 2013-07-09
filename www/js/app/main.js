define(function (require) {
    'use strict';

    var $ = require('jquery');

    $(function () {
        document.addEventListener("deviceready", function () {
            require(['app/app'], function(app){
            	app.start();
            },function(e){
            	console.log(e);
            });
        }, false);
    });
});