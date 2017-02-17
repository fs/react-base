import React from 'react';
import TodoContainer from 'containers/todo';
import Home from 'components/home';

const Main = (isAuthenticated) =>
  isAuthenticated ? <TodoContainer/> : <Home/>

export default Main
