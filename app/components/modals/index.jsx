import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoModal from 'components/todoModal';
import SigninModal from 'components/signinModal';
import SignupModal from 'components/signupModal';

const MODALS = {
  todo: TodoModal,
  signIn: SigninModal,
  signUp: SignupModal
};

class Modals extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    modalName: PropTypes.string.isRequired
  }

  renderCurrentModal = () => {
    if (this.props.modalName) {
      const CurrentModal = MODALS[this.props.modalName];

      return <CurrentModal/>;
    }
  }

  render() {
    return (
      <div className="modals">
        { this.renderCurrentModal() }
      </div>
    );
  }
}

const mapStateToProps = state => state.application;

export default connect(mapStateToProps)(Modals);
