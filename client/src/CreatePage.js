import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Box, Button, Grid, TextField } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";





function CreatePost() {

    const userInfo = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState("");



    if (!userInfo.email) {
        return 'Você precisa fazer login para acessar essa página!';
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




    //FUNÇÃO MOCKADA ENQUANTO N TEMOS O ENDPOINT


    function registerUser(e) {
        e.preventDefault();
        console.log(e)
        userInfo.setText(text)


    }


    return (
        <>
            <Grid container sx={{ justifyContent: "center", }}>
                <Grid sm={12} item sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
                    <Box sx={{ bgcolor: "white", paddingY: 4, paddingX: 10, borderRadius: 2 }}>
                        <form action="" onSubmit={e => registerUser(e)}>
                            <h1>Criar Postagem!</h1>
                            <p>Escreva abaixo o contúdo da página WIKI que vc quer criar, aceitamos texto no formato Markdown ou (Html, porém não funciona ainda pois n temos um interpretador pra isso)</p>
                            <TextField
                                sx={{ mb: 2, backgroundColor: "white" }}
                                variant="outlined"
                                type="text"
                                placeholder="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <br />
                            <MDEditor height={400} value={text} onChange={setText} />
                            <br />
                            <Button sx={{ mt: 2 }} variant="contained" type="submit" >Enviar</Button>
                        </form>
                    </Box>

                </Grid>

            </Grid>
        </>
    )
}

export default CreatePost;