/**
 * Created by Игорь on 16.04.2019.
 */
import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Igor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Artem</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Natalya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Sergey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Dimych</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}
export default Dialogs;