import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import ApplicationStore from 'stores/application';
import TodoModal from 'components/todoModal';
import SigninModal from 'components/signinModal';
import SignupModal from 'components/signupModal';

const MODALS = {
  todo: TodoModal,
  signIn: SigninModal,
  signUp: SignupModal
};

@connectToStores
export default class Modals extends React.Component {
  static propTypes = {
    modalName: React.PropTypes.string.isRequired
  }

  static getStores(props) {
    return [ApplicationStore];
  }

  static getPropsFromStores(props) {
    return ApplicationStore.getState();
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
