jest.dontMock('../' + <%= component %> + '.js');

describe(<%= component %>, function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;

    beforeEach(function() {
        //setup code here
    });

    it('first test description', function() {
        // test code here
    });

    it('second test description', function() {
        // test code here
    });
});

