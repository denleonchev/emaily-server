import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import Subheader from 'material-ui/Subheader'

import * as actions from '../../actions'
import "./NewSurveyPreview.css"
import surveyConfig from './surveyConfig'

const displayValues = (fields) => {
  return fields.map((field, index) => {
    const { name, value } = field
    const fieldConfig = surveyConfig.find((item) => {
      return item.name === name
    })
    const { Icon, floatingLabelText } = fieldConfig
    return (
      <ListItem
        className="new-survey-preview-item"
        key={name}
        leftIcon={<Icon />}
        primaryText={value}
        secondaryText={floatingLabelText}
      />
    )
  })
}

const NewSurveyPreview = (props) => {
  const { formValues, cancelPreview, submitSurvey, history } = props
  console.log('formValues', formValues)
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
      {displayValues(fields)}
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
