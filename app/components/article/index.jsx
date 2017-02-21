import React, { Component, PropTypes } from 'react'

export default class Article extends Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }

  state = {
    id: this.props.params.id
  }

  render() {
    return (
      <article>
        <br/>

        <h3>Why React? Edit on GitHub</h3>
        <p>
          React is a JavaScript library for creating user interfaces by Facebook and Instagram.
          Many people choose to think of React as the V in MVC.
          We built React to solve one problem: building large applications with data that changes over time.
        </p>

        <h3>Simple</h3>
        <p>
          Simply express how your app should look at any given point in time,
          and React will automatically manage all UI updates when your underlying data changes.
        </p>

        <h3>Declarative</h3>
        <p>
          When the data changes, React conceptually hits the "refresh" button,
          and knows to only update the changed parts.
        </p>

        <h3>Build Composable Components</h3>
        <p>
          React is all about building reusable components.
          In fact, with React the only thing you do is build components.
          Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.
        </p>

        <h3>Give It Five Minutes</h3>
        <p>
          React challenges a lot of conventional wisdom, and at first glance some of the ideas may seem crazy.
          Give it five minutes while reading this guide;
          those crazy ideas have worked for building thousands of components
          both inside and outside of Facebook and Instagram.
        </p>

        <br/>

        <b>article id: { this.state.id }</b>
      </article>
    )
  }
}
