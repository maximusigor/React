/**
 * Created by Игорь on 16.04.2019.
 */
import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <div className="dialog">
                    Igor
                </div>
                <div className="dialog">
                    Artem
                </div>
                <div className="dialog">
                    Natalya
                </div>
                <div className="dialog">
                    Viktor
                </div>
                <div className="dialog">
                    Sergey
                </div>
                <div className="dialog">
                    Dimych
                </div>
            </div>
            <div className="messages">
                <div className="message">Hi</div>
                <div className="message">How are you?</div>
                <div className="message">Yo</div>
            </div>
        </div>
    )

}
export default Dialogs;