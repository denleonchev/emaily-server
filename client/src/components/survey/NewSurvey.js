import React, { Component } from 'react'

import NewSurveyForm from './NewSurveyForm'
import NewSurveyPreview from './NewSurveyPreview'

class Survey extends Component {
  constructor (props) {
    super(props)
    this.state = { preview: false }
  }

  render () {
    if (this.state.preview === true) {
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

export default Survey
