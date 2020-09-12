import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div class='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer
                    store={props.store}
                />}
                />
                <Route path='/profile' render={() => <Profile
                    store={props.store}
                    // profilePage={props.state.profilePage}
                    // dispatch={props.dispatch}
                />}/>
            </div>
        </div>
    )
}

export default App;

//==================================================
// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
// import Dialogs from "./components/Dialogs/Dialogs";
// import {Route} from "react-router-dom";
// import Header from "./components/Header/Header";
//
//
// const App = (props) => {
//     return (
//         <div className='app-wrapper'>
//             <Header/>
//             <Navbar/>
//             <div class='app-wrapper-content'>
//                 <Route path='/dialogs' render={() => <Dialogs
//                     store={props.store}
//                 />}
//                 />
//                 <Route path='/profile' render={() => <Profile
//                     store={props.store}
//                     // profilePage={props.state.profilePage}
//                     // dispatch={props.dispatch}
//                 />}/>
//             </div>
//         </div>
//     )
// }
//
// export default App;