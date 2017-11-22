import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import moment from 'moment'

import './Dashboard.css'
import * as actions from '../actions'
import requireAuth from './RequireAuth'

class Dashboard extends Component {
  componentWillMount () {
    this.getSurveys()
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.auth !== nextProps.auth) {
      this.getSurveys()
    }
  }
  getSurveys () {
    const { fetchSurveys } = this.props
    fetchSurveys()
  }
  renderTable () {
    const { surveys } = this.props
    if (surveys === null) {
      return null
    } else if (surveys.length) {
      return (
        <Table
          className="dashboard-table"
          selectable={false}
        >
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Subject</TableHeaderColumn>
              <TableHeaderColumn>Date Sent</TableHeaderColumn>
              <TableHeaderColumn>Negative</TableHeaderColumn>
              <TableHeaderColumn>Positive</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {surveys.map((survey) => (
              <TableRow key={survey._id}>
                <TableRowColumn>{survey.title}</TableRowColumn>
                <TableRowColumn>{survey.subject}</TableRowColumn>
                <TableRowColumn>{moment(survey.dateSent).format("MMMM Do YYYY, h:mm a")}</TableRowColumn>
                <TableRowColumn>{survey.no}</TableRowColumn>
                <TableRowColumn>{survey.yes}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    } else {
      return (
        <h2>You have no surveys!</h2>
      )
    }
  }
  render () {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        { this.renderTable() }
        <Link to="surveys/new" className="dashboard-add">
          {/* <Button icon="add" className="dashboard-add-button" floating accent/> */}
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

export default requireAuth(connect(mapStateToProps, actions)(Dashboard))
