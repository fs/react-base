import React from 'react';
import HeaderLayout from 'components/header/layout';
import TodoModal from 'components/todo_modal/view';
import SigninModal from 'components/signin_modal/view';
import SignupModal from 'components/signup_modal/view';
import Footer from 'components/footer/view';
import styles from './styles';

export default class ApplicationLayout extends React.Component {
  render() {
    return (
      <div className={ styles.layout }>
        <main className={ styles.wrapper }>
          <HeaderLayout/>
          { this.props.children }
          <TodoModal/>
          <SigninModal/>
          <SignupModal/>
        </main>
        <Footer/>
      </div>
    );
  }
}
