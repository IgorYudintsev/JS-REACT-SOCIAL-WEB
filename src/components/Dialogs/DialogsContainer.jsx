import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import Redirect from "../Profile/ProfileContainer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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

// let AuthRedirectComponent = (props) => {
//     if (props.isAuth == false) return <Redirect to={'/Login'}/>
//     return <Dialogs {...props}/>
// }

let AuthRedirectComponent=withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStatetoProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;