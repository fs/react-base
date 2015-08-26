import React from 'react';
import ModalActions from 'scripts/actions/modal';
import Menu from 'scripts/components/header/menu';

export default class HeaderLayout extends React.Component {
  create() {
    ModalActions.show();
  }

  render() {
    return (
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-brand">React Base</div>
        </div>
        <nav id="bs-navbar" className="collapse navbar-collapse">
          <Menu items={
            [
              { title: 'Home', route: '/' },
              { title: 'About', route: '/about' },
              { title: 'About Extended', route: '/about/extended' }
            ]
          }/>
          <ul className="nav navbar-nav navbar-right">
            <li className="new-task-button">
              <a onClick={ this.create }>New Task</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
