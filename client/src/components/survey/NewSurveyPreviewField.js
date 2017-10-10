import React from 'react';
import { List } from 'react-toolbox/lib/list/List';
import { ListItem } from 'react-toolbox/lib/list/ListItem';

const NewSurveyPreviewField = (props) => {
  const { label, value } = props;
  return(
   
      <div>
          <h3>{ label }</h3>
          <span>{ value }</span>
      </div>
    
  );
}

export default NewSurveyPreviewField;