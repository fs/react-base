import React from 'react';
import TodoLayout from 'components/todo/layout';
import Dashboard from 'components/dashboard/view';
import session from 'services/session';

export default class HeaderLayout extends React.Component {
  state = session.store().getState()

  constructor() {
    super();

    this.changeState = ::this.changeState;
  }

  componentDidMount() {
    session.store().listen(this.changeState);
  }

  componentWillUnmount() {
    session.store().unlisten(this.changeState);
  }

  changeState(state) {
    this.setState(state);
  }

  render() {
    return session.loggedIn() ? <TodoLayout/> : <Dashboard/>;
  }
}
