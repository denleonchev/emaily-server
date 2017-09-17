import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header'

const DashBoard = () => (
    <h2>DashBoard</h2>
)
const SurveyNew = () => (
    <h2>SurveyNew</h2>
)
const Landing = () => (
    <h2>Landing</h2>
)

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route path="/dashboard" component={DashBoard} />
                    <Route path="/servey_new" component={SurveyNew} />
                </div>
            </Router>
        </div>
    );
}

export default App;