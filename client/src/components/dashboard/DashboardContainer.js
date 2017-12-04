import React, { Component } from 'react'
import { connect } from 'react-redux'

import './DashboardContainer.css'
import LoadingProgress from './../LoadingProgress'
import Search from './Search'
import SurveysTable from './SurveysTable'
import * as actions from '../../actions'
import requireAuth from '../RequireAuth'

import { getSelectedSurvey } from '../../reducers/index';

class DashboardContainer extends Component {
  constructor (props) {
    super(props)
    this.getSurveys = this.getSurveys.bind(this)
    this.setSearch = this.setSearch.bind(this)
    this.state = { search: '' }
  }
  componentWillMount () {
    this.getSurveys()
  }
  componentWillUnmount () {
    this.setSearch()
  }
  getSurveys (params) {
    const { fetchSurveys } = this.props
    fetchSurveys(params)
  }
  setSearch (value) {
    this.setState({ search: value })
  }
  renderLayout () {
    const { surveys, search, isFetchintSurveys, initalFetchingSurveys, selectedSurvey, selectSurvey } = this.props
    if (initalFetchingSurveys && isFetchintSurveys) {
      return (
        <LoadingProgress />
      )
    } else if (initalFetchingSurveys && !surveys.items.length) {
      return (
        <h2>You have no surveys!</h2>
      )
    } else if ((initalFetchingSurveys && surveys.items.length > 1) || !initalFetchingSurveys) {
      return (
        <div>
          <Search
            getSurveys={this.getSurveys}
            setSearch={this.setSearch}
            search={this.state.search}
          />
          <SurveysTable
            surveys={surveys}
            isFetchintSurveys={isFetchintSurveys}
            getSurveys={this.getSurveys}
            selectedSurvey={selectedSurvey}
            selectSurvey={selectSurvey}
          />
        </div>
      )
    } else {
      return (
        <div>
          <SurveysTable
            surveys={surveys}
            isFetchintSurveys={isFetchintSurveys}
            getSurveys={this.getSurveys}
            selectedSurvey={selectedSurvey}
            selectSurvey={selectSurvey}
          />
        </div>
      )
    }
  }
  render () {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        { this.renderLayout() }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    surveys: state.surveys,
    search: state.search,
    isFetchintSurveys: state.isFetchintSurveys,
    initalFetchingSurveys: state.initalFetchingSurveys,
    selectedSurvey: getSelectedSurvey(state.surveys, state.selectedSurveyNumber)
  }
}

export default requireAuth(connect(mapStateToProps, actions)(DashboardContainer))
