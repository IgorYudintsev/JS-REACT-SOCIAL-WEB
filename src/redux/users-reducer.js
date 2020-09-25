const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
           return {
                ...state,
                users: state.users.map(m => {
                    if(m.id===action.userID){
                     return {...m,followed:true}
                    }
                    return m;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(m => {
                    if(m.id===action.userID){
                        return {...m,followed:false}
                    }
                    return m;
                })
            };
        case SET_USERS:{
            return {...state,users:[...state.users, ...action.users]}
        }

        default:
            let stateCopy = {...state};
            return stateCopy;
    }
}

export let followAC = (userID) => ({type: FOLLOW, userID})
export let unfollowAC = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}
export let setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;
