
define(['jquery', 'underscore', 'underscore-string'], function ($, _) {

    var renderContact = _.template($('#app-contact-template').html()),
        renderTodo = _.template($('#app-todo-template').html()),
        renderEvent = _.template($('#app-event-template').html());


    var View = function (kwargs) {
        this.$el = kwargs.$el;

        this.$children = {
            'todo': undefined,
            'contact': undefined,
            'event': undefined,
        }
    };


    View.prototype.render = function(objectName, data) {
        var renderMap = {
                'contact': renderContact,
                'todo': renderTodo,
                'event': renderEvent,
            },
            render = renderMap[objectName],
            context = this.getContext(objectName, data);

        if (this.$children[objectName] !== undefined) {
            this.$children[objectName].remove();
        }

        // artificial data base retrieval
        if (objectName === 'contact') {
            // pull contact details
            var emailAddress = _.str.strip($(context.emailAddress).text());
            if (emailAddress === 'janet.smith@edu.world') {
                context.name = 'Janet Smith';
                context.image = 'janet';
                context.description = 'Loves parties! and swimming';
                context.telephoneNumber = '07777744331';
            }
        }


        this.$children[objectName] = $(render(context));
        this.$el.append(this.$children[objectName]);
    };


    View.prototype.clear = function() {
        this.$el.html('');
    };


    View.prototype.getContext = function(objectName, data) {
        var map = {
            contact: {
                name: 'Name?',
                description: 'description?',
                address: '',
                telephoneNumber: '',
                emailAddress: '',
                image: '',
            },
            todo: {
                name: 'Name?',
                description: 'description?',
            },
            event: {
                name: 'Name?',
                description: 'description?',
                address: '',
                date: '',
            },
        };

        return _.extend(map[objectName], data);
    };


    return View;
});
