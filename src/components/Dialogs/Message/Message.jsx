/**
 * Created by Igor on 16.04.2019.
 */
import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>

};

export default Message;