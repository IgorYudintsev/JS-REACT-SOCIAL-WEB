import React from 'react';
import {addPostActionCreator, newPostElementCreator} from './../../../redux/profile-reducer'
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


let mapStatetoProps=(state)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewPostText:(text)=>{
            let action = newPostElementCreator(text)
            dispatch(action);
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }

    }
}


const MyPostsContainer=connect(mapStatetoProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;