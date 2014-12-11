
define(['jquery', 'underscore'], function ($, _) {

// {
//     name: 'Janet Smith',
//     description: '..'
//     address: '',
//     mobile: '079999123456'
//     skype: 'janetatskype'
// }

    var Engine = function () {};

    /*
     * FIXME: create proper inference algorithm to calculate which
     * kind of entity user wants to deal with
     */
    Engine.prototype.inferEntityType = function(ciVariables) {
        var types = _.unique(
                _.map(ciVariables, function (v) { return v.type })),

            definitions = {
                'todo': ['item'],
                'contact': ['address', 'emailAddress', 'telephoneNumber'],
                'event': ['address', 'date'],
            },
            entities = [];

        _.pairs(definitions).forEach(function (pair) {
            var entityType = pair[0],
                definition = pair[1];

            if (_.intersection(definition, types).length > 0) {
                entities.push(entityType);
            }
        });

        return entities;
    };


    return Engine;
});

