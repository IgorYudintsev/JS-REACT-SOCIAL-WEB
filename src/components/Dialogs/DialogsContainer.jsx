import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import Redirect from "../Profile/ProfileContainer";


let mapStatetoProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

let AuthRedirectComponent = (props) => {
    if (props.isAuth == false) return <Redirect to={'/Login'}/>
    return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStatetoProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;