import React from 'react'
import UserCard from '../src/components/UserCard'

const Search = () => {
  return (
   <div className="search-page">

    <div className="container">
    <div className="searchbar">
        <i className="fi fi-rr-search"></i>
        <input type="text" name='searc' placeholder='Search' />
    </div>


    <div className="search-result">

    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />

    </div>

    </div>
   
   </div>
  )
}

export default Search
