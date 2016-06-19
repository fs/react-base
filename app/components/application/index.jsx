import React from 'react';
import Header from 'components/header';
import TodoModal from 'components/todo_modal';
import SigninModal from 'components/signin_modal';
import SignupModal from 'components/signup_modal';
import Footer from 'components/footer';
import styles from './styles';

export default class Application extends React.Component {
  render() {
    return (
      <div className={ styles.layout }>
        <main className={ styles.wrapper }>
          <Header/>
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
