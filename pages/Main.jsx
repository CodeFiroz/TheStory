import React from 'react'
import Header from '../src/components/Header'
import NewPost from '../src/components/NewPost'
import Post from '../src/components/Post'

const Main = () => {
    return (
        <div className="main">
            <Header />

            <div className="container">

                <NewPost />

                <Post />

            </div>
        </div>

    )
}

export default Main
