
requirejs.config({
    baseUrl: '',

    paths: {
        'jquery': 'lib/jquery.min',
        'underscore': 'lib/underscore.min',
        'underscore-string': 'lib/underscore.string.min',
        'rangy': 'lib/rangy-core',
        'interact': 'lib/interact-1.1.3.min',
        'parser': 'src/parser',
        'engine': 'src/engine',
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'underscore-string': {
            deps: ['underscore'],
            exports: '_'
        },
        'interact': {
            exports: 'interact',
        },
        'rangy': {
            exports: 'rangy',
        },
    },
});


require([
    'jquery',
    'underscore',
    'parser',
    'engine',
    'underscore-string',
], function ($, _, Parser, Engine) {
    var parser = new Parser(),
        engine = new Engine({$el: $('#app-drop')});


    var template = _.template(
        '<div class="ui label orange noselect app-semantic-token"' +
        '     draggable="true">' +
        '    <%= text %>' +
        // '    <i class="app-remove-selection delete icon"></i>' +
        '</div>');


    var render = function (context) {
        return $(template(context))[0];
    };


    var replaceSelectedText = function () {
        var selection,
            text,
            range;

        if (window.getSelection) {
            selection = window.getSelection();
            if (selection.rangeCount) {
                range = selection.getRangeAt(0);
                text = range.toString();

                if (text.length > 0) {
                    range.deleteContents();
                    range.insertNode(render({text: text}));
                }
            }
        }
    };


    $('#app-raw-text').on('mouseup', function () {
        replaceSelectedText();
    });

    var clearSelection = function ($el) {
        $el.replaceWith(_.str.strip($el.text()));
    };

    // $('body').on('click', '.app-remove-selection', function (event) {
    $('body').on('dblclick', '.app-semantic-token', function (event) {
        event.preventDefault();

        // var $this = $(this).parent();
        var $this = $(this);

        clearSelection($this);
    });

    /*
     * Drag & Drop part
     */
    var $dragged;

    $('body').on('drag', '.app-semantic-token', function (event) {
        $dragged = $(this);
    });

    $('#app-drop').on('dragover', function (event) {
        event.preventDefault();
    }).on('drop', function (event) {
        event.preventDefault();

        var text = $dragged.text();

        clearSelection($dragged)
    });

    /*
     * Commands
     */
    var ENTER = 13;

    $('#app-command-bar').on('keydown', function (event) {
        var $this = $(this),
            data;

        if (event.which == ENTER) {
            data = parser.parse($this.val());
            engine.render(data.object, data.extra);
        }
    });
});
