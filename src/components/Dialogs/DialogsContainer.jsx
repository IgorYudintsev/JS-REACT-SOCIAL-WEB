import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import Redirect from "../Profile/ProfileContainer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStatetoProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

// let AuthRedirectComponent=withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStatetoProps, mapDispatchToProps)(AuthRedirectComponent)
//export default DialogsContainer;

export default compose(
    connect(mapStatetoProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs);