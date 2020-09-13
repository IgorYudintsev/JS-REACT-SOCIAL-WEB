import React from 'react';
import {addPostActionCreator, newPostElementCreator} from './../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import store from "../../../redux/redux-store";

const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onPostChange = (text) => {
                        let action = newPostElementCreator(text)
                        store.dispatch(action);
                    }
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}
                        />
                    )
                }
            }

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;