import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Post from './Post';
import UserContext from "./UserContext";
import { Box, Button, Grid, TextField } from "@mui/material";

function ForumHome() {

    const userInfo = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    //FUNÇAÕ MOCKADA ENQUANTO N TEMOS O ENDPOINT

    function addPostagem(e) {
        e.preventDefault();
        if (title && text && userInfo.email) {
            window.alert("Sua postagem com o título: " + title + " foi criada! Obrigado " + userInfo.email)
        }
    }

    // function addPostagem(e) {
    //     e.preventDefault();
    //     axios.put('https://api-todo-list-six.vercel.app/todos', { title: title, text: text, user: userInfo.email }, { withCredentials: true })
    //         .then(response => {

    //             setTitle('');
    //         })
    // }




    //FUNÇÃO MOCKADA ENQUANTO N TEMOS O ENDPOINT


    function registerUser(e) {
        e.preventDefault();


    }


    return (
        <>
        <div className="App">
        <Post
            title="Título do post 1"
            content="Texto do post: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci."
            author="@autorPost1"
        />
        <Post
            title="Título do post 2"
            content="Texto do post: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci."
            author="@autorPost2"
        />
        <Post
            title="Título do post 3"
            content="Texto do post: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci."
            author="@autorPost3"
        />
    </div>
      </>
    )
}

export default ForumHome;