import React from 'react';
import TodoContainer from 'containers/todo';
import Home from 'components/home';

const Main = ({ loggedIn }) =>
  loggedIn ? <TodoContainer/> : <Home/>

export default Main
