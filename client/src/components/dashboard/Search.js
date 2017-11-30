
import React from 'react'
import SearchBar from 'material-ui-search-bar'

const Search = ({ getSurveys, setSearch, search }) => {
  return (
    <SearchBar
      onChange={(value) => setSearch(value)}
      onRequestSearch={() => getSurveys({ search })}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
  )
}

export default Search
