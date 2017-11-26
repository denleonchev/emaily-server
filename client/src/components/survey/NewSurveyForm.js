import React from 'react'
import { reduxForm } from 'redux-form'
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
import CancelButton from './CancelButton'
import RaisedButton from 'material-ui/RaisedButton'
import NewSurveyFormFields from './NewSurveyFormFields'

import emailsValidate from '../../utils/validateEmails'
import fieldsConfig from './surveyConfig'
import './NewSurveyForm.css'

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.subject) {
    errors.subject = 'Required'
  }
  if (!values.answers) {
    errors.answers = 'Required'
  }
  if (!values.recipients) {
    errors.recipients = 'Required'
  } else if (!emailsValidate(values.recipients)) {
    errors.recipients = 'Invalid email address'
  }

  return errors
}

const NewSurveyForm = (props) => {
  const { handleSubmit, reset } = props
  return (
    <form
      className="new-survey-form"
      onSubmit={handleSubmit}
    >
      <h2>Configure a new survey</h2>
      <NewSurveyFormFields
        fields={fieldsConfig}
      />
      <CancelButton reset={reset} />
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
