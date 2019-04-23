import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

let posts = [
    {id: 1, message: 'Hi, React! I am a new user', likesCount: 1},
    {id: 2, message: '-Hi, user! Welcome in my world!', likesCount: 23}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();