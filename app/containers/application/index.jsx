import React, { Component, cloneElement } from 'react'
import { connect } from 'react-redux'
import actions from 'actions/session'
import Navigation from 'components/navigation'
import Footer from 'components/footer'
import styles from './styles'

const Application = ({ children, logoutUser, loggedIn, currentUser }) => {
  return (
    <div className={ styles.layout }>
      <main className={ styles.wrapper }>
        <Navigation
          currentUser={ currentUser }
          loggedIn={ loggedIn }
          logoutUser={ logoutUser }
        />
        { cloneElement(children, { loggedIn }) }
      </main>
      <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state.session
})
const mapDispatchToProps = (dispatch) => ({
  logoutUser: (currentUser) => dispatch(actions.logoutUser(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(Application)
