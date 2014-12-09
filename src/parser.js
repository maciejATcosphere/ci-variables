
define(['underscore-string'], function (_) {

    var Parser = function () {};

    Parser.prototype.synonym = function (token) {
        var map = {
            'add': 'create',
            'create': 'create',
            'update': 'update',

            'appointment': 'event',
            'event': 'event',
            'todo': 'todo',
            'contact': 'contact',
        };

        return map[_.str.strip(token).toLowerCase()]
    };


    Parser.prototype.parse = function (commandText) {
        var commandPattern = new RegExp([
            '^(add|create|update)',
            '(todo|contact|event|appointment)',
            '(.*)',
        ].join('\\s*'), 'i');

        var parsed = commandPattern.exec(commandText);

        return {
            action: this.synonym(parsed[1]),
            object: this.synonym(parsed[2]),
            extra: {
                name: parsed[3],
            }
        };
    };

    return Parser;
});
