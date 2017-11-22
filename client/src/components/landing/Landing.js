import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import banner from './banner.png'
import './Landing.css'

class Landing extends Component {
  constructor (props) {
    super(props)
    this.state = { loaded: false }
    this.handleLoading = this.handleLoading.bind(this)
  }

  handleLoading () {
    this.setState({ loaded: true })
  }

  render () {
    const { loaded } = this.state
    const { handleLoading } = this
    return (
      <div className="landing">
        <img
          className="landing-banner"
          src={banner} alt="Emaily!"
          onLoad={handleLoading}/>
        <div className="landing-header-container">
          <CSSTransition
            classNames="slogan"
            in={loaded}
            appear={true}
            timeout={1000}
          >
            <h1 className={loaded ? 'slogan-ready' : 'slogan'}>Send your surveys with Emaily!</h1>
          </CSSTransition>
        </div>
      </div>
    )
  }
}

export default Landing
