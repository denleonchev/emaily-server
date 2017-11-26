import React from 'react'

import { ListItem } from 'material-ui/List'
import surveyConfig from './surveyConfig'

const NewSurveyPreviewList = ({ fields }) => {
  return (
    <div>
      {fields.map((field, index) => {
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
      })}
    </div>
  )
}

export default NewSurveyPreviewList
