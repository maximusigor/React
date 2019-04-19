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

    let dialogsData = [
        {id:1, name:'Igor'},
        {id:2, name:'Artem'},
        {id:3, name:'Natalya'},
        {id:4, name:'Viktor'},
        {id:5, name:'Sergey'},
        {id:6, name:'Dimych'}
    ]

    let messagesData = [
        {id:1, message:'Hi'},
        {id:2, message:'How are you?'},
        {id:3, message:'Yo'},
        {id:4, message:'React'},
        {id:5, message:'Hello World'},
        {id:6, message:'I am front-end developer'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
                <Message message={messagesData[5].message} />
            </div>
        </div>
    )
}
export default Dialogs;