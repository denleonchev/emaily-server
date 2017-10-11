import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-toolbox/lib/button/Button';

import './NewSurveyForm.css';
import emailsValidate from '../../utils/validateEmails';
import fieldsConfig from './surveyConfig';


const validate = values => {
  const errors = {};
  if (!values.surveyTitle) {
    errors.surveyTitle = 'Required'
  }
  if (!values.subject) {
    errors.subject = 'Required'
  }
  if (!values.recipients) {
    errors.recipients = 'Required';
  } else if (!emailsValidate(values.recipients)) {
    errors.recipients = 'Invalid email address'
  }

  return errors;
}

const renderFields = (fields) => {
  return (
    <div>
      {fields.map((field, index) => {
        const { name, component, label, type, multiline = false, rows = 1 } = field;
        return (
          <Field key = { name }
            name={ name }
            component={ component }
            label={ label }
            type={ type }
            multiline={ multiline }
            rows={ rows }
          />
        )
      })}
    </div>
  )
}

const NewSurveyForm = (props) => {
  const { handleSubmit } = props;
  return(
    <form onSubmit={ handleSubmit }>
      <div>
        { renderFields(fieldsConfig) }
        <Button
          label="Preview a survey"
          type="submit"
          raised
          primary
        />
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'newSurvey',
  destroyOnUnmount: false,
  validate
})(NewSurveyForm)