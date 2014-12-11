
define(['nlp'], function (nlp) {

    describe('isDate', function () {

        it("recognizes dates correctly", function () {
            var testCases = [
                '2014-11-23',
                '2014/11/23',
                '11.23.14',
                'yesterday',
                'this Friday',
                'tomorrow',
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.isDate(testCase)).toBeTruthy();
            });
        });


        it("recognizes not dates correctly", function () {
            var testCases = [
                '$12.34',
                '078889123',
                '10,000,324',
                'this day was great',
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.isDate(testCase)).toBeFalsy();
            });
        });
    });


    describe('isAddress', function () {

        it("recognizes addresses correctly", function () {
            var testCases = [
                'one love street',
                'one love St',
                '5 Johnson Court, Amazing Avenue',
                'hope square',
                'where\'s my life place',
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.isAddress(testCase)).toBeTruthy();
            });
        });


        it("recognizes not addresses correctly", function () {
            var testCases = [
                '$12.34',
                'my room',
                'what?',
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.isAddress(testCase)).toBeFalsy();
            });
        });
    });


    describe('isAddress', function () {

        it("recognizes telephone numbers correctly", function () {
            var testCases = [
                'call me 07999911111',
                '(0044)567-567-789',
                '+35 567-567-789',
                '+35 567 567 789',
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.isTelephoneNumber(testCase)).toBeTruthy();
            });
        });


        it("recognizes not telephone numbers correctly", function () {
            var testCases = [
                '$12.34',
                'jordan1234@wp.pl',
                'where\'s my life place',
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.isTelephoneNumber(testCase)).toBeFalsy();
            });
        });
    });


    describe('isEmailAddress', function () {

        it("recognizes email addresses correctly", function () {
            var testCases = [
                'marco@san.fran.com',
                'jordan1234@wp.pl',
                'where is jak_firn_me34@crazy.org',
                'jak.firn.me34@edu.me',
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.isEmailAddress(testCase)).toBeTruthy();
            });
        });


        it("recognizes not addresses correctly", function () {
            var testCases = [
                '$12.34',
                'my room',
                'what?',
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.isEmailAddress(testCase)).toBeFalsy();
            });
        });
    });


    describe('isItem', function () {

        it("recognizes items correctly", function () {
            var testCases = [
                'cucumber',
                'my favourite ball',
                'spring rolls',
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.isItem(testCase)).toBeTruthy();
            });
        });


        it("recognizes not items correctly", function () {
            var testCases = [
                '2014/11/23',
                '(0044)567-567-789',
                'jak.firn.me34@edu.me',
                '5 Johnson Court, Amazing Avenue',
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.isItem(testCase)).toBeFalsy();
            });
        });
    });


    describe('inferType', function () {

        it("infers type of text correctly", function () {
            var testCases = [
                ['cucumber', 'item'],
                ['2014-11-23', 'date'],
                ['5 Johnson Court, Amazing Avenue', 'address'],
                ['(0044)567-567-789', 'telephoneNumber'],
                ['jordan1234@wp.pl', 'emailAddress'],
            ];

            testCases.forEach(function (testCase) {
                expect(nlp.inferType(testCase[0])).toEqual(testCase[1]);
            });
        });


    });
});
