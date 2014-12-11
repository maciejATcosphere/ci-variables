
define([], function () {


    var isDate = function (text) {
        var pattern = new RegExp([
            '\\d{4}-\\d{2}-\\d{2}',
            '\\d{4}/\\d{2}/\\d{2}',
            '\\d{2}\\.\\d{2}\\.\\d{2}',
            'yesterday|today|tomorrow',
            'monday|tuesday|wednesday|thursday|friday|saturday|sunday'
        ].join('|'), 'i');

        return pattern.test(text);
    };


    var isMoney = function (text) {

    };


    var isAddress = function (text) {
        var pattern = new RegExp([
            'street|st',
            'avenue',
            'square',
            'place',
        ].join('|'), 'i');

        return pattern.test(text);
    };


    var isEmailAddress = function (text) {
        var pattern = new RegExp(
            '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`' +
            '{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-' +
            '\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")' +
            '@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)' +
            '+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]' +
            '|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4]' +
            '[0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:' +
            '(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]' +
            '|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])')


        return pattern.test(text);
    };


    var isTelephoneNumber = function (text) {
        var pattern = new RegExp([
            '\\d{6,}',
            '\\(?(00|\\+)\\d{1,3}\\)?\\s*[\\d+\\-\\s]+',
        ].join('|'), 'i');

        return pattern.test(text);
    };


    var isItem = function (text) {
        return !(
            isDate(text) ||
            isAddress(text) ||
            isTelephoneNumber(text) ||
            isEmailAddress(text))
    };


    var inferType = function (text) {
        if (isDate(text)) { return 'date'; }
        if (isTelephoneNumber(text)) { return 'telephoneNumber'; }
        if (isEmailAddress(text)) { return 'emailAddress'; }
        if (isAddress(text)) { return 'address'; }
        if (isItem(text)) { return 'item'; }
    };


    return {
        isDate: isDate,
        isAddress: isAddress,
        isTelephoneNumber: isTelephoneNumber,
        isEmailAddress: isEmailAddress,
        isItem: isItem,
        inferType: inferType,
    };
});