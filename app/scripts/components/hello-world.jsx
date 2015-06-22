import React from 'react';
import Base from 'scripts/components/base';

export default class HelloWorld extends Base {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.bindMethods('increment');
  }

  componentDidMount() {
    // after component added
    console.log('HelloWorld started');
  }

  componentWillUnmount() {
    // after component removed
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  text() {
    return 'React Base';
  }

  render() {
    return (
      <p onClick={ this.increment }>
        { this.text() } { this.state.counter }
      </p>
    );
  }
}
