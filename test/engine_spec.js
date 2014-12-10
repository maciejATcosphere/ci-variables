
define(['engine'], function (Engine) {

    describe("Engine", function () {

        describe("getEntity", function () {

            it("guesses entity type correctly", function () {
                var item = function () {
                        return {value: '123', type: 'item'};
                    },
                    address = function () {
                        return {value: '123', type: 'address'};
                    },
                    telephone = function () {
                        return {value: '123', type: 'telephone'};
                    },
                    email = function () {
                        return {value: '123', type: 'email'};
                    },
                    date = function () {
                        return {value: '123', type: 'date'};
                    },
                    testCases = [
                        [[item()], 'todo'],
                        [[item(), item()], 'todo'],
                        [[item(), item(), item()], 'todo'],
                        [[address(), date()], 'event'],
                        [[telephone(), email()], 'contact'],
                        [[telephone(), address()], 'contact'],
                        [[email(), address()], 'contact'],
                    ],
                    engine = new Engine({});

                testCases.forEach(function (testCase) {
                    expect(
                        testCase[1]
                    ).toEqual(engine.inferEntityType(testCase[0]));
                });
            });
        });

    });
});