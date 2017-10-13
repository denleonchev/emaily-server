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
import { fetchSurveys } from '../actions';

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchSurveys();
  }
  renderTable () {
   if (this.props.surveys === null) {
      return null;
    } else if (this.props.surveys.length) {
      const { surveys } = this.props;
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSurveys: () => {
          dispatch(fetchSurveys());
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);