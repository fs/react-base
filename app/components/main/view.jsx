import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import TodoLayout from 'components/todo/layout';
import Dashboard from 'components/dashboard/view';
import session from 'services/session';

@connectToStores
export default class HeaderLayout extends React.Component {
  static getStores(props) {
    return [session.store()];
  }

  static getPropsFromStores(props) {
    return session.store().getState();
  }

  render() {
    return session.loggedIn() ? <TodoLayout/> : <Dashboard/>;
  }
}
