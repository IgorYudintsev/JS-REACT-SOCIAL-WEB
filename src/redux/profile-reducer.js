import {authAPI, usersAPI} from "../api/api";

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 100},
    ],
    newPostText: 'it-kamasutra.com',
    profile:null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case  updateNewPostText: {
            return {
                ...state,
                posts: [...state.posts],
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE:{
            return {...state,profile:action.profile}
        }
        default:
                 return state;
    }
}

export let addPostActionCreator = () => {
    return {
        type: addPost
    }
}
export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export let getUserProfile =(userId)=> (dispatch) => {

    usersAPI.getprofile(userId).then(response => {
         dispatch(setUserProfile(response.data))
    })
}
export let newPostElementCreator = (text) => {
    return {
        type: updateNewPostText,
        newText: text
    }
}
export default profileReducer;
