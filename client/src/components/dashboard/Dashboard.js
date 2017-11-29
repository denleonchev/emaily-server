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
import LoadingProgress from './../LoadingProgress'
import Search from './Search'
import SurveysTable from './SurveysTable'
import * as actions from '../../actions'
import requireAuth from '../RequireAuth'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.getSurveys = this.getSurveys.bind(this)
    this.setSearch = this.setSearch.bind(this)
  }
  componentWillMount () {
    this.getSurveys()
  }
  componentWillUnmount() {
    this.setSearch();
  }
  getSurveys (params) {
    const { fetchSurveys } = this.props
    fetchSurveys(params)
  }
  setSearch (value) {
    const { setSearch } = this.props
    setSearch(value)
  }
  renderTable () {
    const { surveys, setSearch, search, isFetchintSurveys } = this.props
    if (surveys === null) {
      return (
        <LoadingProgress />
      )
    } else if (surveys.length) {
      return (
        <div>
          <Search 
            fetchSurveys={this.getSurveys}
            setSearch={this.setSearch}
            search={search}
          />
          <SurveysTable
            surveys={surveys}
            isFetchintSurveys={isFetchintSurveys}
          />
        </div>
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
        {/* <Link to="surveys/new" className="dashboard-add">
          <Button icon="add" className="dashboard-add-button" floating accent/>
        </Link> */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    surveys: state.surveys,
    search: state.search,
    isFetchintSurveys: state.isFetchintSurveys
  }
}

export default requireAuth(connect(mapStateToProps, actions)(Dashboard))
