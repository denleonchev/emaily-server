import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import Button from 'react-toolbox/lib/button/Button';

import * as actions from '../../actions';
import "./NewSurveyPreview.css";
import surveyConfig from './surveyConfig';

const displayValues = (fields) => {
  return fields.map((field, index) => {
    const { name, value } = field;
    const fieldConfig = surveyConfig.find((item) => {
      return item.name === name;
    })
    const label = fieldConfig.label
    return (
      <ListItem
        ripple={ false }
        key={ name }
        caption={ label }
        legend={ value }
      />
    )
  });
}

const NewSurveyPreview = (props) => {
  const { formValues, cancelPreview, submitSurvey, history } = props;
  console.log('formValues', formValues)
  const fields = Object.keys(formValues).map((key) => ({name: key, value: formValues[key]}))
  return(
    <List>
      <ListSubHeader caption='Please revise the settings of the new survey and do accordingly' />
      { displayValues(fields) }
      <Button
        label="Edit a survey"
        type="submit"
        onClick={ cancelPreview }
        className="new-survey-preview-button"
        raised
        accent
      />
      <Button
        label="Submit a survey"
        type="submit"
        onClick={() => {
          submitSurvey(formValues, history)
          }
        }
        className="new-survey-preview-button"
        raised
        primary
      />
    </List>
  );
}

function mapStateToProps (state) {
  return {
    formValues: state.form.newSurvey.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(NewSurveyPreview))