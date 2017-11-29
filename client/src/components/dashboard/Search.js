
import React from 'react'
import SearchBar from 'material-ui-search-bar'

const Search = ({ fetchSurveys, setSearch, search }) => {
  return (
    <SearchBar
      onChange={(value) => setSearch(value)}
      onRequestSearch={() => fetchSurveys({ search })}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
      value={search}
    />
  )
}

export default Search
