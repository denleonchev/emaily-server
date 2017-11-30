
import React from 'react'

const Search = ({ isFetchintSurveys, search }) => {
  if (areSuveysRefined && !isFetchintSurveys && surveys) {
    return (
      <div>You searched for { search }</div>
    )
  } else if (!isFetchintSurveys)
  return (
    <div></div>
  )
}

export default Search
