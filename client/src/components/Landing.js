import React from 'react';
import { TransitionGroup } from 'react-transition-group';

import banner from './banner.png';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <img className="landing-banner" src={banner} alt="Emaily!" />
      <div className="landing-header-container">
        <TransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
         <h1>Fading at Initial Mount</h1>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default Landing;