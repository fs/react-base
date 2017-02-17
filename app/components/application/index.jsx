import React, { Component, cloneElement } from 'react'
import { connect } from 'react-redux'
import Navigation from 'components/navigation'
import Footer from 'components/footer'
import styles from './styles'

class Application extends Component {
  render() {
    return (
      <div className={ styles.layout }>
        <main className={ styles.wrapper }>
          <Navigation
            currentUser={ this.props.currentUser }
            isAuthenticated={ this.props.isAuthenticated }
            dispatch={ this.props.dispatch }
          />
          { cloneElement(this.props.children, { isAuthenticated: this.props.isAuthenticated }) }
        </main>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.session
})

export default connect(mapStateToProps)(Application)
