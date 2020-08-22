import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyCreator,sendMessageCreator} from './../../redux/dialogs-reducer'


let Dialogs = (props) => {
    let state=props.store.getState().dialogsPage
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (event) => {
     let body=  event.target.value;
     props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>

            <div className={s.messages}>
                <div>{state.messages.map(m => <Message message={m.message}/>)}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        placeholder={'Enter your message'}
                        onChange={onNewMessageChange}
                    >
                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;