
requirejs.config({
    baseUrl: '',

    paths: {
        'jquery': 'lib/jquery.min',
        'underscore': 'lib/underscore.min',
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery-hotkeys': {
            exports: '$',
            deps: ['jquery'],
        },
    },

    deps: ['app'],
});


require([
], function () {

});
