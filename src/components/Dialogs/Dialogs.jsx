import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Redirect from "react-router-dom/es/Redirect";
import {Field,reduxForm} from "redux-form";
import dialogsReducer from "../../redux/dialogs-reducer";


let Dialogs = (props) => {
    let state = props.dialogsPage
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.sendMessage();
        // props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body)
    }
    let addNewMassage = () => {
        // console.log(values.newMessageBody)
        console.log('ffff')
        // props.sendMessage(values.newMessageBody);
    }

    if (props.isAuth == false) return <Redirect to={'/Login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>

            <div className={s.messages}>
                <div>{state.messages.map(m => <Message message={m.message}/>)}</div>
                <div>
                    <AddMessageFormRedux onSumbmit={addNewMassage}/>
                </div>
            </div>
        </div>
    )
}

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
