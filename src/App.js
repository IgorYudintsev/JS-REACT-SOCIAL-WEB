import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div class='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs
                    store={props.store}
                    // state={props.state.dialogsPage}
                />}
                />
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                />}/>
            </div>
        </div>
    )
}

export default App;