requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-2.0.3.min'
    }
});

requirejs(['app/main']);