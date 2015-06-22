import React from 'react';

var HelloWorldES5 = React.createClass({
  getInitialState: function() {
    return { counter: 0 };
  },

  componentDidMount: function() {
    // after component added
    console.log('HelloWorld started');
  },

  componentWillUnmount: function() {
    // after component removed
  },

  increment: function(){
    this.setState({ counter: this.state.counter + 1 });
  },

  text: function() {
    return 'React Base'
  },

  render: function() {
    return (
      <p onClick={ this.increment }>
        { this.text() } { this.state.counter }
      </p>
    );
  }
})

export default HelloWorldES5
