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
            <Link to="/"><i className="fi fi-rr-home"></i> Home</Link>
        </li>
        <li>
            <Link to="/"><i className="fi fi-rr-plus"></i> Post</Link>
        </li>
        <li>
            <Link to="/search"><i className="fi fi-rr-search"></i> Search</Link>
        </li>

        <li>
            <Link to="/notification"><i className="fi fi-rr-bell"></i> Notification</Link>
        </li>
        <li>
            <Link to="/"><i className="fi fi-rr-bookmark"></i> Bookmark</Link>
        </li>
        <li>
            <Link to="/sign-in"><i className="fi fi-rr-user"></i> Profile</Link>
        </li>

    </ul>

    </div>
  )
}

export default Sidebar
