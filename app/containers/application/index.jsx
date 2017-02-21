import React, { Component, cloneElement } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from 'actions/session'
import Navigation from 'components/navigation'
import Footer from 'components/footer'
import styles from './styles'

const Application = ({ children, logoutUser, isAuthenticated, currentUser }) => {
  return (
    <div className={ styles.layout }>
      <main className={ styles.wrapper }>
        <Navigation
          currentUser={ currentUser }
          isAuthenticated={ isAuthenticated }
          logoutUser={ logoutUser }
        />
        { cloneElement(children, { isAuthenticated }) }
      </main>
      <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state.session
})
const mapDispatchToProps = (dispatch) => ({
  logoutUser: (currentUser) => dispatch(logoutUser(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(Application)
