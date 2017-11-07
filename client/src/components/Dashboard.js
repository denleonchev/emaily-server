import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'react-toolbox/lib/table/Table';
import TableHead from 'react-toolbox/lib/table/TableHead';
import TableRow from 'react-toolbox/lib/table/TableRow';
import TableCell from 'react-toolbox/lib/table/TableCell';
import Button from 'react-toolbox/lib/button/Button';
import moment from 'moment';

import './Dashboard.css';
import * as actions from '../actions';
import requireAuth from './RequireAuth';

class Dashboard extends Component {
  componentWillMount() {
    this.getSurveys();
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.auth !== nextProps.auth) {
      this.getSurveys();
    }
  }
  getSurveys() {
    const { fetchSurveys } = this.props;
    fetchSurveys();
  }
  renderTable () {
    const { surveys } = this.props;
    if (surveys === null) {
      return null;
    } else if (surveys.length) {
      return (
        <Table selectable={ false }>
          <TableHead>
            <TableCell>Title</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Date Sent</TableCell>
            <TableCell>No</TableCell>
            <TableCell>Yes</TableCell>
          </TableHead>
          { surveys.map((survey) => (
            <TableRow key={ survey._id }>
              <TableCell>{ survey.title }</TableCell>
              <TableCell>{ survey.subject }</TableCell>
              <TableCell>{ moment(survey.dateSent).format() }</TableCell>
              <TableCell>{ survey.no }</TableCell>
              <TableCell>{ survey.yes }</TableCell>
            </TableRow>
          )) }
        </Table>
      )} else {
      return (
        <h2>You have no surveys!</h2>
      )
    }
  }
  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        { this.renderTable() }
        <Link to="surveys/new" className="dashboard-add">
          <Button icon='add' className="dashboard-add-button" floating accent/>
        </Link> 
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    surveys: state.surveys
  }
}

export default requireAuth(connect(mapStateToProps, actions)(Dashboard));