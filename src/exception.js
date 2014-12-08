
define([], function () {

    var InvalidInputException = function (message) {
        this.name = "InvalidInputException";
        this.message = message || (
            "provided input contains forbidden characters");
    }
    InvalidInputException.prototype = new Error();
    InvalidInputException.prototype.constructor = InvalidInputException;


    var LowerBoundReachedException = function (message) {
        this.name = "LowerBoundReachedException";
        this.message = message || (
            "provided input contains forbidden characters");
    }
    LowerBoundReachedException.prototype = new Error();
    LowerBoundReachedException.prototype.constructor = LowerBoundReachedException;


    var CacheTooBigException = function (maxCacheSize) {
        this.name = "CacheTooBigException";
        this.message = (
            "cache size exceeded: " + maxCacheSize + "MB. " +
            "Further calculations are not possible");
    }
    CacheTooBigException.prototype = new Error();
    CacheTooBigException.prototype.constructor = CacheTooBigException


    return {
        InvalidInputException: InvalidInputException,
        LowerBoundReachedException: LowerBoundReachedException,
        CacheTooBigException: CacheTooBigException,
    }
});