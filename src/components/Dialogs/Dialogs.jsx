import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from 'react-router-dom';

const  DilogItem=(props)=>{
    return(
        <div className={s.active}><NavLink to={'/dialogs/'+props.id} className={s.LinkD}>{props.name}</NavLink></div>
        )
}

const  Message=(props)=>{
    return <div className={s.message}>{props.name}</div>
}

let Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DilogItem name={'Dimach'} id={'1'}/>
                <DilogItem name={'Sasha'} id={'2'}/>
                <DilogItem name={'Igor'} id={'3'}/>
                <DilogItem name={'Olga'} id={'4'}/>
                <DilogItem name={'Nadzeika'} id={'5'}/>
            </div>

            <div className={s.messages}>
                <Message name={'Hi'}/>
                <Message name={'How are you?'}/>
                <Message name={'Yoo'}/>
            </div>
        </div>
    )
}

export default Dialogs;