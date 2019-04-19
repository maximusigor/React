/**
 * Created by Игорь on 16.04.2019.
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Igor" id="1" />
                <DialogItem name="Artem" id="2" />
                <DialogItem name="Natalya" id="3" />
                <DialogItem name="Viktor" id="4" />
                <DialogItem name="Sergey" id="5" />
                <DialogItem name="Dimych" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}
export default Dialogs;