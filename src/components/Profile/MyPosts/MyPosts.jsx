import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import Profile from "../Profile";
import {addPostActionCreator,newPostElementCreator} from './../../../redux/profile-reducer'

const MyPosts = (props) => {
    let newPostElement = React.createRef()
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(newPostElementCreator(text))
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}/></div>
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