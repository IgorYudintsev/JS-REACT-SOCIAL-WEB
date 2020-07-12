import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import Profile from "../Profile";



const MyPosts = (props) => {
    let newPostElement = React.createRef()
    let addPost = () => {
      let text=newPostElement.current.value;
        props.addPosts(text);
        newPostElement.current.value='';
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {props.profilePosts.map(m => <Post message={m.message} likesCount={m.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;