import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import Main from 'components/main';
import About from 'components/about';
import Article from 'components/article';
import Application from 'containers/application';

const Root = ({ store, history }) => (
  <Provider store={ store }>
    <Router history={ history }>
      <Route component={ Application }>
        <Route path="/" component={ Main } />
        <Route path="about" component={ About }>
          <Route path="extended/:id" component={ Article } />
        </Route>
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
