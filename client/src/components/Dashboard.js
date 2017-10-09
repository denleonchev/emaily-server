import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-toolbox/lib/button/Button';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Link to="surveys/new" className="dashboard-add">
        <Button icon='add' className="dashboard-add-button" floating accent/>
      </Link> 
    </div>
  )
}

export default Dashboard;