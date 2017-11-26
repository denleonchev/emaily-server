import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoadingProgress from '../LoadingProgress'
import NewSurveyForm from './NewSurveyForm'
import NewSurveyPreview from './NewSurveyPreview'
import requireCredits from '../RequireCredits'
import requireAuth from '../RequireAuth'

class NewSurveyContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { preview: false }
  }

  render () {
    const { auth } = this.props
    if (auth === null) {
      return (
        <LoadingProgress />
      )
    } else if (this.state.preview === true) {
      return (
        <NewSurveyPreview
          cancelPreview={() => {
            this.setState({ preview: false })
          }}
        />
      )
    } else {
      return (
        <NewSurveyForm
          onSubmit={() => {
            this.setState({ preview: true })
          }}
        />
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    formValues: state.auth
  }
}

export default requireAuth(requireCredits(connect(mapStateToProps)(NewSurveyContainer)))
