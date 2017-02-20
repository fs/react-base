import React, { Component, cloneElement } from 'react'
import { connect } from 'react-redux'
import Navigation from 'components/navigation'
import Footer from 'components/footer'
import styles from './styles'

const Application = ({ children, dispatch, isAuthenticated, currentUser }) => {
  return (
    <div className={ styles.layout }>
      <main className={ styles.wrapper }>
        <Navigation
          currentUser={ currentUser }
          isAuthenticated={ isAuthenticated }
          dispatch={ dispatch }
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

export default connect(mapStateToProps)(Application)
