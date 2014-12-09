
define(['parser'], function(Parser) {

    describe('Parser', function() {

        it('parser simple commands correctly', function () {
            var p = new Parser(),
                testCases = [
                    [
                        "add todo party shopping list",
                        {
                            'action': 'create',
                            'object': 'todo',
                            'extra': {
                                'name': 'party shopping list',
                            },
                        },
                    ],
                    [
                        "create todo party shopping list",
                        {
                            'action': 'create',
                            'object': 'todo',
                            'extra': {
                                'name': 'party shopping list',
                            },
                        },
                    ],
                    [
                        "create appointment party at Janet's",
                        {
                            'action': 'create',
                            'object': 'event',
                            'extra': {
                                'name': "party at Janet's",
                            },
                        },
                    ],
                    [
                        "update contact Janet",
                        {
                            'action': 'update',
                            'object': 'contact',
                            'extra': {
                                'name': "Janet",
                            },
                        },
                    ],
                    [
                        "CREATE   ConTact   Janet",
                        {
                            'action': 'create',
                            'object': 'contact',
                            'extra': {
                                'name': "Janet",
                            },
                        },
                    ],
                ];

            testCases.forEach(function (testCase) {

                expect(testCase[1]).toEqual(p.parse(testCase[0]));
            });
        });

    });

});