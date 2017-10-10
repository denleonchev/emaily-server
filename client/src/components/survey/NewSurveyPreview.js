import React from 'react';
import { connect } from 'react-redux';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';

import surveyConfig from './surveyConfig';

const displayValues = (fields) => {
  return fields.map((field, index) => {
    const { name, value } = field;
    const fieldConfig = surveyConfig.find((item) => {
      return item.name === name;
    })
    const label = fieldConfig.label
    console.log(field, label)
    return (
      <ListItem
        ripple={ false }
        key={ index }
        caption={ label }
        legend={ value }
      />
    )
  });
}

const NewSurveyPreview = (props) => {
  const { formValues } = props;
  const fields = Object.keys(formValues).map((key) => ({name: key, value: formValues[key]}))
  console.log(fields)
  return(
    <List>
      <ListSubHeader caption='Please revise the settings of the new survey' />
      { displayValues(fields) }
    </List>
  );
}

function mapStateToProps (state) {
  return {
    formValues: state.form.newSurvey.values
  }
}

export default connect(mapStateToProps, null)(NewSurveyPreview)