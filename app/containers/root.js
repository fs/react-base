import React, { PropTypes } from 'react';
import { Router, Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { requireAuth } from 'helpers/routes';
import Application from 'components/application';
import Main from 'components/main';
import About from 'components/about';
import Article from 'components/article';

const Root = ({ store, history }) => (
  <Provider store={ store }>
    <Router history={ history }>
      <Route component={ Application }>
        <Route path="/" component={ Main }/>
        <Route
          path="about"
          component={ About }
          onEnter={ requireAuth }
        >
          <Route path="extended/:id" component={ Article }/>
        </Route>
        <Redirect from="*" to="/"/>
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
