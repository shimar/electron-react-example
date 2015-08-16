var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');

var Header = React.creatClass({

  /**
   * @return {object}
   */
  render: function() {
            return (
              <header id="header">
                <h1>todos</h1>
                <TodoTextInput id="new-todo" placeholder="What needs to be done?" onSave={this._onSave} />
              </header>
            );
          },

  _onSave: function(text) {
             if (text.trim()) {
               TodoActions.create(text);
             }
           }

});

module.exports = Header;
