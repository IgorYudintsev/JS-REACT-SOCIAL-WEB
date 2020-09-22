const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

let initialState= {
        posts: [
            {id: 1, message: 'Hi', likesCount: 10},
            {id: 2, message: 'How are you?', likesCount: 100},
        ],
        newPostText: 'it-kamasutra.com'
    }


const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case addPost:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy={...state};
            stateCopy.posts=[...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case  updateNewPostText:
        {
            let stateCopy={...state};
            stateCopy.posts=[...state.posts]
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        default:
            let stateCopy={...state};
            return stateCopy;
    }
  }

export let addPostActionCreator = () => {
    return {
        type: addPost
    }
}
export let newPostElementCreator = (text) => {
    return {
        type: updateNewPostText,
        newText: text
    }
}
export default profileReducer;
