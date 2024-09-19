import React from 'react'

const Post = () => {
    return (
        <div className="post">
            <div className="post-head">
                <div className="user-avatar"></div>
                <div className="user-name">
                    <h4>Bad Pitt</h4>
                    <p>@your_.pitt</p>
                </div>
            </div>

        <div className="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias rerum laudantium dolorum molestiae repellat dolorem itaque fuga quos eaque similique culpa, suscipit atque cumque, sint modi et, nisi officia!
        </div>

        <div className="post-meta">

            <div>
                <i className="fi fi-rr-heart"></i>
                <span>Like</span>
            </div>

            <div>
                <i className="fi fi-rr-bookmark"></i>
                <span>Save</span>
            </div>

            <div>
                <i className="fi fi-rr-share"></i>
                <span>Share</span>
            </div>

        </div>

        </div>



    )
}

export default Post
