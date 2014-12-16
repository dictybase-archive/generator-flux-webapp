/*!
 * Starting point of application
 */

/*
 * Before you uncomment the two lines below make sure you run
 *  gulp setup:flatcss
*/
//require('../styles/main.less');
//require('../styles/vendor/bootstrap/dist/js/bootstrap');

var React = require('react');
var router = require('./router');

router.run(function (Handler) {
    React.render(<Handler/>, document.body);
});
