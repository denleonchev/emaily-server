import React, { Component } from 'react';

import NewSurveyForm from './NewSurveyForm'
import NewSurveyPreview from './NewSurveyPreview';


class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {preview: false};
  }

  render() {
    if (this.state.preview === true) {
      return <NewSurveyPreview />;
    } else {
      return (
        <NewSurveyForm onSubmit={() => {
          this.setState({preview: true})
          console.log('Submit was handled');
        }} />
      )
    }
  }
}



export default Survey;