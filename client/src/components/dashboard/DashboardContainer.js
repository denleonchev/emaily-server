import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Dashboard.css'
import LoadingProgress from './../LoadingProgress'
import Search from './Search'
import SurveysTable from './SurveysTable'
import * as actions from '../../actions'
import requireAuth from '../RequireAuth'

class DashboardContainer extends Component {
  constructor (props) {
    super(props)
    this.getSurveys = this.getSurveys.bind(this)
    this.setSearch = this.setSearch.bind(this)
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
    const { setSearch } = this.props
    setSearch(value)
  }
  renderLayout () {
    const { items, search, isFetchintSurveys, initalFetchingSurveys } = this.props
    if (initalFetchingSurveys && isFetchintSurveys) {
      return (
        <LoadingProgress />
      )
    } else if (initalFetchingSurveys && !items.length) {
      return (
        <h2>You have no surveys!</h2>
      )
    } else if ((initalFetchingSurveys && items.length > 1) || !initalFetchingSurveys) {
      return (
        <div>
          <Search
            getSurveys={this.getSurveys}
            setSearch={this.setSearch}
            search={search}
          />
          <SurveysTable
            surveys={items}
            isFetchintSurveys={isFetchintSurveys}
          />
        </div>
      )
    } else {
      return (
        <div>
          <SurveysTable
            surveys={items}
            isFetchintSurveys={isFetchintSurveys}
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
    items: state.surveys.items,
    search: state.search,
    isFetchintSurveys: state.isFetchintSurveys,
    initalFetchingSurveys: state.initalFetchingSurveys
  }
}

export default requireAuth(connect(mapStateToProps, actions)(DashboardContainer))
