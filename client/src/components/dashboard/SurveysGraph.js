import React from 'react'
import Dialog from 'material-ui/Dialog'
import { HorizontalBar } from 'react-chartjs-2'

const SurveysGraph = ({ selectedSurvey, selectSurvey }) => {
  const { title, answers } = selectedSurvey
  const isOpen = Boolean(selectedSurvey)
  const data = {
    labels: answers.map((answer) => answer.name),
    datasets: [
      {
        label: title,
        backgroundColor: 'rgba(0, 188, 212, 0.6)',
        hoverBackgroundColor: 'rgba(0, 188, 212, 1)',
        data: answers.map((answer) => answer.count)
      }
    ]
  }
  const n = data.datasets[0].data.length
  return (
    <Dialog
      title="Dialog With Actions"
      modal={false}
      open={isOpen}
      onRequestClose={() => { selectSurvey(null) }}
    >
      <HorizontalBar
        data={data}
        width={100}
        height={100*n}
        options={{
          maintainAspectRatio: false,
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }]
          }
        }}
      />
    </Dialog>
  )
}

export default SurveysGraph
