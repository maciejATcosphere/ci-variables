
define(['jquery', 'underscore'], function ($, _) {

// {
//     name: 'Janet Smith',
//     description: '..'
//     address: '',
//     mobile: '079999123456'
//     skype: 'janetatskype'
// }
    var Engine = function (kwargs) {
        // this.renderContact = _.template($('#app-contact-template').html()),
        // this.renderTodo = _.template($('#app-todo-template').html()),
        // this.renderEvent = _.template($('#app-event-template').html());

        this.$el = kwargs.$el;
    };


    Engine.prototype.inferEntityType = function(ciVariables) {

        var types = _.unique(
            _.map(ciVariables, function (v) { return v.type })),
            map = {
                'item': 'todo',
                'address,email': 'contact',
                'address,telephone': 'contact',
                'email,telephone': 'contact',
                'address,date': 'event',
            };

        return map[types.sort().toString()];
    };


    Engine.prototype.getContext = function(objectName, data) {
        var map = {
            contact: {
                name: '',
                description: 'description',
                address: '',
                mobile: '',
                skype: '',
            },
            todo: {
                name: '',
                description: 'description',
            },
            event: {
                name: '',
                description: 'description',
                address: '',
            },
        };

        return _.extend(map[objectName], data);
    };


    Engine.prototype.render = function(objectName, data) {
        var renderMap = {
                'contact': renderContact,
                'todo': renderTodo,
                'event': renderEvent,
            },
            render = renderMap[objectName],
            context = this.getContext(objectName, data);

        this.$el.prepend($(render(context)));
    };

    return Engine;
});

