import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import  {reducer as formReducer} from 'redux-form'

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sideBarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer
});

export let store=createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;
export default store;



