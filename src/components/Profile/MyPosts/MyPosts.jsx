import React from 'react';
import s from './MyPosts.mudule.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message='Hi ,how are you?' likesCount='10' />
                <Post message='it`s my first post ' likesCount='100' />
            </div>
        </div>
    )
}

export default MyPosts;