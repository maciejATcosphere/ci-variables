
define(['exception'], function (exception) {

    var ErrorView = function ($el) {
        this.$el = $el;
    };


    /**
     * Captures are exceptions thrown by the invokaction of func making
     * it centralized exception handler.
     *
     * All error and warning messages are displaye in $el DOM element.
     */
    ErrorView.prototype.observe = function (func) {
        var hasError = false;

        try {
            func();
        } catch (e) {
            hasError = true;
            if (
                (e instanceof exception.InvalidInputException) ||
                (e instanceof exception.CacheTooBigException)
            ) {
                this.$el.html(
                    '<i class="fi-alert alert-icon"></i> ' + e.message);
            } else if (e instanceof exception.LowerBoundReachedException) {
                this.$el.html(
                    '<i class="fi-eye warning-icon"></i> ' + e.message);
            } else {
                console.log(e);
            }
        } finally {
            if (!hasError) {
                this.$el.html(
                    '<i class="fi-like normal-icon"></i> ' +
                    'Everything works nicely:-)');
            }
        }
    };


    return {ErrorView: ErrorView};
});