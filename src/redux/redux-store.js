import {combineReducers, createStore} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sideBarReducer,
    usersPage:usersReducer
});

export let store=createStore(reducers);

export default store;
