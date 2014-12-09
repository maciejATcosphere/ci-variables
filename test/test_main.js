var tests = [];

for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}


requirejs.config({
    baseUrl: '/base/src',

    paths: {
        'parser': 'parser',
        'underscore': '../lib/underscore.min',
        'underscore-string': '../lib/underscore.string.min',
    },


    shim: {
        'underscore': {
            exports: '_'
        },
        'underscore-string': {
            deps: ['underscore'],
            exports: '_'
        },
    },

    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
