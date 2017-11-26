import React from 'react'

import ChipInput from 'material-ui-chip-input'
import ContactMail from 'material-ui/svg-icons/communication/contact-mail'
import Message from 'material-ui/svg-icons/communication/message'
import TextField from 'material-ui/TextField'
import Title from 'material-ui/svg-icons/editor/title'
import Subject from 'material-ui/svg-icons/action/subject'

const renderField = ({ input, meta, ...props }) => {
  return (
    <TextField
      {...input}
      {...props}
      errorText={meta.touched && meta.error}
      className="new-survey-form-input"
    />
  )
}

const renderChip = ({ input, meta, ...props }) => (
  <ChipInput
    {...input}
    {...props}
    errorText={meta.touched && meta.error}
    value = {input.value || []}
    onRequestAdd={(addedChip) => {
      let values = input.value || []
      values = values.slice()
      values.push(addedChip)
      input.onChange(values)
    }}
    onRequestDelete={(deletedChip) => {
      let values = input.value || []
      values = values.filter(v => v !== deletedChip)
      input.onChange(values)
    }}
    onBlur={() => input.onBlur()}
    className="new-survey-form-input"
  />
)

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
    hintText: 'Add comma separated recipietns of the survey',
    Icon: ContactMail,
    name: 'recipients',
    multiLine: true,
    rows: 3
  },
  {
    component: renderChip,
    floatingLabelText: 'Possible answers',
    hintText: 'Enter possible answers with "Enter"',
    Icon: ContactMail,
    name: 'answers',
    multiLine: true,
    rows: 3
  }
]
