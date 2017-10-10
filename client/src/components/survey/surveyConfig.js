import React from 'react';
import Input from 'react-toolbox/lib/input/Input';

const renderField = ({ input, meta, ...props }) => (
  <Input
    { ...input }
    { ...props }
    error={ meta.touched && meta.error } />
);

export default [
  {
    name: "surveyTitle",
    component: renderField,
    label: "Survey title",
    type: "text"
  },
  {
    name: "subjectLine",
    component: renderField,
    label: "Subject line",
    type: "text"
  },
  {
    name: "body",
    component: renderField,
    label: "Email body",
    type: "text",
    multiline: true,
    rows: 10
  },
  {
    name: "recipients",
    component: renderField,
    label: "Recipients",
    type: "text",
    multiline: true,
    rows: 3
  }
];