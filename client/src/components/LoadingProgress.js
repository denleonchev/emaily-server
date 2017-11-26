import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

import './LoadingProgress.css'

const LoadingProgress = () => (
  <div className="progress-bar">
    <CircularProgress
      size={60}
      thickness={7}
    />
  </div>
)

export default LoadingProgress
