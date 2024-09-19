import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">

    <div className="logo">
        <span>TS</span>
    </div>

    <ul>
        <li>
            <a href="#"><i className="fi fi-rr-home"></i> Home</a>
        </li>
        <li>
            <a href="#"><i className="fi fi-rr-plus"></i> Post</a>
        </li>
        <li>
            <a href="#"><i className="fi fi-rr-search"></i> Search</a>
        </li>

        <li>
            <a href="#"><i className="fi fi-rr-bell"></i> Notification</a>
        </li>
        <li>
            <a href="#"><i className="fi fi-rr-bookmark"></i> Bookmark</a>
        </li>
        <li>
            <a href="#"><i className="fi fi-rr-user"></i> Profile</a>
        </li>

    </ul>

    </div>
  )
}

export default Sidebar
