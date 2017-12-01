import React from 'react'
import Dialog from 'material-ui/Dialog'

const SurveysGraph = ({ selectedSurvey, selectSurvey }) => {
  const isOpen = Boolean(selectedSurvey)
  return (
    <Dialog
      title="Dialog With Actions"
      modal={false}
      open={isOpen}
      onRequestClose={() => {selectSurvey(null)}}
    >
    </Dialog>
  )
}

export default SurveysGraph
