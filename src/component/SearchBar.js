import React from 'react'
import "../Style/header.css"

function SearchBar(props) {

  return (
    <div className="SearchBar">
        <div className="locationBtn">
          <i className='fa fa-map-marker' style={{marginRight:"1rem"}}></i>
          <b>Madhapur</b>
        </div>
        <div className="searchInp">
            <input type="text" placeholder=' Search for lab tests or health packages' onChange={(e)=>props.setSearchkey(e.target.value)}/>
        </div>
        <div className="searchBtn">
            <button>Search</button>
        </div>
    </div>
  )
}

export default SearchBar