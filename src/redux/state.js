/**
 * Created by Ihor on 24.04.2019.
 */
import {rerenderEntiteTree} from '../render';

let state ={
    profilePage: {
        posts : [
            {id: 1, message: 'Hi, React! I am a new user', likesCount: 1},
            {id: 2, message: '-Hi, user! Welcome in my world!', likesCount: 23}
        ]
    },

    dialogsPage : {
        messages: [
            {id:1, message:'Hi'},
            {id:2, message:'How are you?'},
            {id:3, message:'Yo'},
            {id:4, message:'React'},
            {id:5, message:'Hello World'},
            {id:6, message:'I am front-end developer'}

        ],
        dialogs: [
            {id:1, name:'Igor'},
            {id:2, name:'Artem'},
            {id:3, name:'Natalya'},
            {id:4, name:'Viktor'},
            {id:5, name:'Sergey'},
            {id:6, name:'Dimych'}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntiteTree(state);
}

export default state;