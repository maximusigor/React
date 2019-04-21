/**
 * Created by Igor on 16.04.2019.
 */
import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>;
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>

}

const Dialogs = (props) => {

    let dialogs = [
        {id:1, name:'Igor'},
        {id:2, name:'Artem'},
        {id:3, name:'Natalya'},
        {id:4, name:'Viktor'},
        {id:5, name:'Sergey'},
        {id:6, name:'Dimych'}
    ];

    let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'How are you?'},
        {id:3, message:'Yo'},
        {id:4, message:'React'},
        {id:5, message:'Hello World'},
        {id:6, message:'I am front-end developer'}

    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = messages.map (m => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogsElements}
            </div>
            <div className={s.messages}>
            {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;