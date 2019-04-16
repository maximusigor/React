import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://tproger.ru/wp-content/uploads/2017/05/react-app.jpg' />
            </div>
            <div>
                ava + description
            </div>
                <MyPosts />
            </div>
    )
}

export default Profile;