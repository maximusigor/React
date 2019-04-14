import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
        <div>
            New post
        </div>
            <div className={s.posts}>
                <Post message="Hi, React! I am a new user" like="15"/>
                <Post message="-Hi, user! Welcome in my world!" like="20"/>
                {/* <Post />
                <Post />
                <Post />
                <Post /> */}
            </div>
        </div>
    )
}

export default MyPosts;