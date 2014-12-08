
define([], function () {

    var FADE_TIME = 500,
        OFFSET = 30;


    var ArrowView = function ($originEl) {
        this.$originEl = $originEl;

        this.$up = $('#app-up-arrow');
        this.$down = $('#app-down-arrow');
        this.$right = $('#app-right-arrow');
        this.$left = $('#app-left-arrow');
    };


    ArrowView.prototype.show = function (direction) {
        var coordinates = this.$originEl.position(),
            oTop = coordinates.top,
            oLeft = coordinates.left;

        if (direction === 'top-left') {
            stop(this.$down);
            stop(this.$right);
            toggleFade(
                stop(this.$up),
                {top: oTop - OFFSET, left: oLeft});

            toggleFade(
                stop(this.$left),
                {top: oTop, left: oLeft - OFFSET});
        } else if (direction === 'bottom-right') {
            stop(this.$up);
            stop(this.$left);
            toggleFade(
                stop(this.$down),
                {top: oTop - OFFSET, left: oLeft});

            toggleFade(
                stop(this.$right),
                {top: oTop, left: oLeft - OFFSET});
        }
    };


    var toggleFade = function ($el, coordinates) {
        $el.stop().fadeIn(FADE_TIME).fadeOut(FADE_TIME).css(coordinates);

        return $el;
    };


    var stop = function ($el) {
        $el.stop().hide();

        return $el;
    };


    return {ArrowView: ArrowView};
});