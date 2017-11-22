import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'

import emailsValidate from '../../utils/validateEmails'
import fieldsConfig from './surveyConfig'
import './NewSurveyForm.css'

const validate = values => {
  console.log('validating started')
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.subject) {
    errors.subject = 'Required'
  }
  if (!values.recipients) {
    errors.recipients = 'Required'
  } else if (!emailsValidate(values.recipients)) {
    errors.recipients = 'Invalid email address'
  }

  console.log('errors', errors)
  return errors
}

const renderFields = (fields) => {
  return (
    <div>
      {fields.map((field, index) => {
        const { component, floatingLabelText, hintText, multiLine = false, name, rows = 1, rowsMax = 1 } = field
        return (
          <div key = {name}>
            <Field
              className="new-survey-form-field"
              component={component}
              floatingLabelText={floatingLabelText}
              hintText={hintText}
              name={name}
              multiLine={multiLine}
              rows={rows}
              rowsMax={rowsMax}
            />
          </div>
        )
      })}
    </div>
  )
}

const NewSurveyForm = (props) => {
  const { handleSubmit } = props
  return (
    <form
      className="new-survey-form"
      onSubmit={handleSubmit}
    >
      <h2>Configure a new survey</h2>
      {renderFields(fieldsConfig)}
      <RaisedButton
        icon={<ArrowForward color="#fff" />}
        label="Preview your survey"
        primary={true}
        type="submit"
      />
    </form>
  )
}

export default reduxForm({
  form: 'newSurvey',
  destroyOnUnmount: false,
  validate
})(NewSurveyForm)
