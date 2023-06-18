import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Post from './Post';
import UserContext from "./UserContext";
import { Box, Button, Grid, TextField } from "@mui/material";

function ForumHome() {

    const userInfo = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    let posts = [
        {
            author: 'autor1',
            title: 'titulo1',
            content: 'teste',
        },
        {
            author: 'autor2',
            title: 'titulo2',
            content: 'teste'
        }
    ];

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
        {posts.map((item, index) => (
            <Post key={index}
                  title = {item.title}
                  author = {item.author}
                  content = {item.content}
            />
      ))}
    </div>
      </>
    )
}

export default ForumHome;