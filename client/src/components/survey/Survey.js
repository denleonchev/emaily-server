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
  if (!values.nickname) {
    errors.nickname = 'Required'
  } else if (values.nickname.length < 6) {
    errors.nickname = 'Must be at least 6 characters'
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
  const { handleSubmit, shouldReceiveNotifications } = props;
  const renderEmail = () => {
    if(shouldReceiveNotifications) {
      console.log('will render email input');
      return (
        <Field
        name="email"
        component={ renderField }
        label="Enter your email to receive notifications from Emaily"
        type="text"
      />
      )
    }
  };
  return (
    <form onSubmit={ handleSubmit }>
      <div>
          <Field
            name="nickname"
            component={ renderField }
            hint="7 characters min"
            label="Nickname"
            type="text"
          />
          <Field
            name="feedback"
            component={ renderField }
            label="Your feedback"
            hint="16 characters min"
            type="text"
            multiline={ true }
            rows={ 10 }
          />
          <Field
            name="receiveNotifications"
            label="I want receive notifications from Emaily"
            component={ renderCheckbox }
            type="checkbox"
          />
          { renderEmail() }
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
  form: 'survey',
  validate
})(Survey)

const selector = formValueSelector('survey');

export default connect((state) => (
  { shouldReceiveNotifications: selector(state, 'receiveNotifications') }
))(Survey)