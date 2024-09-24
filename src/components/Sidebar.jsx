import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">

    <div className="logo">
        <span>TS</span>
    </div>

    <ul>
        <li>
            <Link to="/"><i className="fi fi-rr-home"></i> <span>Home</span></Link>
        </li>
        <li>
            <Link to="/"><i className="fi fi-rr-plus"></i> <span>Post</span></Link>
        </li>
        <li>
            <Link to="/search"><i className="fi fi-rr-search"></i> <span>Search</span></Link>
        </li>

        <li>
            <Link to="/notification"><i className="fi fi-rr-bell"></i> <span>Notification</span></Link>
        </li>
        <li>
            <Link to="/"><i className="fi fi-rr-bookmark"></i> <span>Bookmark</span></Link>
        </li>
        <li>
            <Link to="/sign-in"><i className="fi fi-rr-user"></i> <span>Profile</span></Link>
        </li>

    </ul>

    </div>
  )
}

export default Sidebar
