const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING";

let initialState = {
    users: [],
    pageSize:100,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false
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
            return {...state,users:[...action.users]}
        }
        case SET_CURRENT_PAGE:{
            return {...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state,totalUsersCount:action.count}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state,isFetching:action.isFetching}
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
export let setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage})
export let setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export let toggleIsFetchingAC=(isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching:isFetching})
export default usersReducer;
