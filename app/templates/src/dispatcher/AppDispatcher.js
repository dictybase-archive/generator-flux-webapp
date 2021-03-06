/*
 * A singleton that operates as the central hub for application updates.
 * For more information visit https://facebook.github.io/flux/
 */

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction: function(action) {
    var payload = {
      source: 'SERVER_ACTION',
      action: action
    };
    this.dispatch(payload);
  },
  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */

  handleViewAction: function (action) {
    var payload = {
        source: 'VIEW_ACTION',
        action: action
    };
    this.dispatch(payload);
  }
});

module.exports = AppDispatcher;
