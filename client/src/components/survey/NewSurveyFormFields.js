import React from 'react'
import { Field } from 'redux-form'

const NewSurveyFields = ({ fields }) => {
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

export default NewSurveyFields
