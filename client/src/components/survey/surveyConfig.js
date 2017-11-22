import React from 'react'
import ContactMail from 'material-ui/svg-icons/communication/contact-mail'
import Message from 'material-ui/svg-icons/communication/message'
import TextField from 'material-ui/TextField'
import Title from 'material-ui/svg-icons/editor/title'
import Subject from 'material-ui/svg-icons/action/subject'

const renderField = ({ input, meta, ...props }) => {
  console.log('meta', meta.error)
  return (
    <TextField
      {...input}
      {...props}
      errorText={meta.touched && meta.error}
    />
  )
}

export default [
  {
    component: renderField,
    floatingLabelText: 'Survey title',
    hintText: 'Name your survey',
    Icon: Title,
    name: 'title'
  },
  {
    component: renderField,
    floatingLabelText: 'Subject',
    hintText: 'Add subject of emails',
    Icon: Subject,
    name: 'subject'
  },
  {
    component: renderField,
    floatingLabelText: 'Email body',
    hintText: 'Provide email with body',
    Icon: Message,
    name: 'body',
    rows: 2,
    rowsMax: 4
  },
  {
    component: renderField,
    floatingLabelText: 'Recipients',
    hintText: 'Add recipietns of the survey',
    Icon: ContactMail,
    name: 'recipients',
    multiLine: true,
    rows: 3
  }
]
