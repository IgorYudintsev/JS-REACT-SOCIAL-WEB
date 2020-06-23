import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>

            <div className={s.messages}>
                {/*{props.messages.map(m=> <Message name={m.message}/>)}*/}
                {props.state.messages.map(m=> <Message message={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;