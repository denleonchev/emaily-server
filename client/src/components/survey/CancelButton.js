import React from 'react'
import { withRouter } from 'react-router-dom'
import Block from 'material-ui/svg-icons/content/block'
import RaisedButton from 'material-ui/RaisedButton'

const CancelButton = (props) => {
  const { reset, history } = props
  const handleReset = () => {
    reset()
    history.push('/surveys')
  }
  return (
    <RaisedButton
      className="new-survey-form-button"
      icon={<Block color="#fff" />}
      label="Cancel"
      onClick={handleReset}
      secondary={true}
      type="submit"
    />
  )
}

export default withRouter(CancelButton)
