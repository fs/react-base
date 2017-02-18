import React, { PropTypes } from 'react'
import { Router, Route, Redirect } from 'react-router'
import { Provider } from 'react-redux'
import Application from 'components/application'
import Main from 'components/main'
import About from 'components/about'
import Article from 'components/article'
import Signin from 'containers/signin'
import Signup from 'containers/signup'

const Root = ({ store, history }) => (
  <Provider store={ store }>
    <Router history={ history }>
      <Route component={ Application }>
        <Route path="/" component={ Main }/>
        <Route path="about" component={ About }>
          <Route path="extended/:id" component={ Article }/>
        </Route>
        <Route path="signin" component={ Signin } />
        <Route path="signup" component={ Signup } />
        <Redirect from="*" to="/"/>
      </Route>
    </Router>
  </Provider>
)

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default Root
