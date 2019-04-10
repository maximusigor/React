import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://tproger.ru/wp-content/uploads/2017/05/react-app.jpg'/>
        </div>
        <div>
            ava + description
    </div>
        <div>
            My post
        <div>
            New post
        </div>
        </div>
        <div className={s.item}>
            <div className={s.item}>
                post1
            </div>
            <div className={s.item}>
                post2
            </div>
        </div>
    </div>
}

export default Profile;