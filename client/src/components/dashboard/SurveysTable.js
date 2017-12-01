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
import Pagination from 'material-ui-pagination'

const SurveysTable = ({ surveys, isFetchintSurveys, getSurveys }) => {
  const { items, pages, page, search } = surveys
  return (
    <div
      className="dashboard-table"
    >
      <Table
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
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >
          {!isFetchintSurveys ? items.map((item) => (
            <TableRow key={item._id}>
              <TableRowColumn>{item.title}</TableRowColumn>
              <TableRowColumn>{item.subject}</TableRowColumn>
              <TableRowColumn>{moment(item.dateSent).format("MMMM Do YYYY, h:mm a")}</TableRowColumn>
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
      {isFetchintSurveys ? <LoadingProgress /> : null}
      {pages > 1 ?
        <Pagination
          total={pages}
          current={page}
          display={5}
          onChange={number => {getSurveys({ search, page: number })}}
          className="dashboard-pagination"
          styleRoot={{
            position: 'fixed',
            bottom: '5%',
            width: '100%',
            textAlign: 'center'
          }}
        />
        : null}
    </div>
  )
}

export default SurveysTable
