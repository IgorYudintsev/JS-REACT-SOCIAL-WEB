import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.active}><NavLink to={'/dialogs/' + props.id} className={s.LinkD}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.name}</div>
}


let Dialogs = (props) => {
    let DialogsData = [
        {id: 1, name: 'Dimach'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Olga'},
        {id: 5, name: 'Nadzeika'},
    ]

    let MessageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yoo'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'Yoo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsData.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>

            <div className={s.messages}>
                {MessageData.map(m=> <Message name={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;