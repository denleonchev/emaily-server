import React from 'react';
import { connect } from 'react-redux'
import { Field, formValueSelector, reduxForm } from 'redux-form';
import Input from 'react-toolbox/lib/input/Input';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import Button from 'react-toolbox/lib/button/Button';

const renderField = ({ input, meta, ...props }) => (
  <Input
    { ...input }
    { ...props }
    error={ meta.touched && meta.error } />
);

const renderCheckbox = ({ input, meta, ...props }) => (
  <Checkbox
    { ...input }
    { ...props }/>
);


const validate = values => {
  const errors = {};
  if (!values.surveyTitle) {
    errors.surveyTitle = 'Required'
  }
  if (!values.feedback) {
    errors.feedback = 'Required'
  } else if (values.feedback.length < 15) {
    errors.feedback = 'Must be at least 6 characters'
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors;
}

let Survey = props => {
  return (
    <form onSubmit={ handleSubmit }>
      <div>
          <Field
            name="surveyTitle"
            component={ renderField }
            label="Survey title"
            type="text"
          />
          <Field
            name="subjectLine"
            component={ renderField }
            label="Subject line"
            type="text"
          />
          <Field
            name="body"
            component={ renderField }
            label="Email body"
            type="text"
            multiline={ true }
            rows={ 10 }
          />
          <Button
          label="Submit a feedback"
          type="submit"
          raised
          primary />
      </div>
    </form>
  )
}

Survey = reduxForm({
  form: 'newSurvey',
  validate
})(Survey)

const selector = formValueSelector('survey');

export default connect((state) => (
  { shouldReceiveNotifications: selector(state, 'receiveNotifications') }
))(Survey)