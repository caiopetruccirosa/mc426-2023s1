import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Box } from "@mui/material";

function MC102() {

    const userInfo = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    if (!userInfo.email) {
        return 'Você precisa fazer login para acessar essa página mc102!';
    }

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
    const markdown = [
        `# Getting Started   with Create React App <br/>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). ## Available Scripts`,
        `## Getting Started   with Create React App <br/>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). ## Available Scripts`,
        `### Getting Started   with Create React App <br/>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). ## Available Scripts`,
        `## Getting Started   with Create React App <br/>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). ## Available Scripts`,
        `## Getting Started   with Create React App <br/>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). ## Available Scripts`,
        `## Getting Started   with Create React App <br/>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). ## Available Scripts`,
    ]


    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", }}>
                <h1>Mc102</h1>
                {markdown.map((item) => (

                    <ReactMarkdown children={item} />
                ))}
            </Box>


        </>
    )
}

export default MC102;