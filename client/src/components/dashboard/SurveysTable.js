import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import moment from 'moment'

import './SurveysTable.css'
import LoadingProgress from './../LoadingProgress'

const SurveysTable = ({ surveys, isFetchintSurveys }) => {
  if (isFetchintSurveys) {
    return (
      <LoadingProgress />
    )
  }
  return (
    <div>
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
    </div>
  )
}

export default SurveysTable
