define(function (require) {
    'use strict';

    var $ = require('jquery');

    $(function () {
        document.addEventListener("deviceready", function () {
            navigator.notification.alert("Cordova is working: " + location.href);
        }, false);
    });
});