import React from 'react';
import PropTypes from 'prop-types';
import TodoContainer from 'containers/todo';
import Home from 'components/home';

const Main = (props) => {
    console.log("L", props);
    return (
      loggedIn ? <TodoContainer/> : <Home/>
    )
}

Main.propTypes = {
  loggedIn: PropTypes.bool
};

export default Main;
