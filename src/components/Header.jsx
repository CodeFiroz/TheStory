import React from 'react'

const Header = () => {
  return (
    <div className="header">

    <div className="search">
        <i className="fi fi-rr-search"></i><input type="text" name="searc" id="search" placeholder='Search' />
    </div>

    <div className="user">
        <div className="user-avatar"></div>
        <div className='username'>
            <h4>Adam Lee</h4>
            <p>@super_adam</p>
        </div>
    </div>

    </div>
  )
}

export default Header
