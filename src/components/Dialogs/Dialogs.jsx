import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

let Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}><NavLink to='/dialogs/1'>Dimych</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/2'>Sasha </NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/3'>Igor </NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/4'>Olga </NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/5'>Nadzeika </NavLink></div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yoo</div>
            </div>
        </div>
    )
}

export default Dialogs;