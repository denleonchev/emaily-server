import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { List } from 'material-ui/List'
import NewSurveyPreviewList from './NewSurveyPreviewList'
import RaisedButton from 'material-ui/RaisedButton'
import Subheader from 'material-ui/Subheader'

import * as actions from '../../actions'
import "./NewSurveyPreview.css"

const NewSurveyPreview = (props) => {
  const { formValues, cancelPreview, submitSurvey, history } = props
  const fields = Object.keys(formValues).map((key) => ({ name: key, value: formValues[key] }))
  return (
    <List
      className="new-survey-preview"
    >
      <Subheader
        className="new-survey-preview-header"
        inset={false}
      >
        Please revise the settings of the new survey and do accordingly
      </Subheader>
      <NewSurveyPreviewList
        fields={fields}
      />
      <RaisedButton
        label="Edit a survey"
        onClick={cancelPreview}
        primary={true}
      />
      <RaisedButton
        className="new-survey-preview-button"
        label="Submit a survey"
        onClick={() => {
          submitSurvey(formValues, history)
        }}
        primary={true}
      />
    </List>
  )
}

function mapStateToProps (state) {
  return {
    formValues: state.form.newSurvey.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(NewSurveyPreview))
