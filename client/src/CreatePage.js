import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Box, Button, Grid, TextField } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Navigate } from "react-router-dom";

function CreatePage() {

    const userInfo = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");
    const [redirect, setRedirect] = useState("");



    if (!userInfo.username) {
        return 'Você precisa fazer login para acessar essa página!';
    }

    //FUNÇÃO MOCKADA ENQUANTO N TEMOS O ENDPOINT

    function addPostagem(e) {
         e.preventDefault();
         axios.post('api/articles', { title: title, content: description, creatorUsername: userInfo.username }, { withCredentials: true })
             .then(response => {
                window.alert("Sua postagem com o título: " + title + " foi criada! Obrigado " + userInfo.username)
                setTitle('');
                setDescription('');
                setRedirect(true);
             })
     }

    if (redirect) {
        return <Navigate to={"/wiki"} />;
    }

    return (
        <>
            <Grid container sx={{ justifyContent: "center", }}>
                <Grid sm={12} item sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
                    <Box sx={{ bgcolor: "white", paddingY: 4, paddingX: 10, borderRadius: 2 }}>
                        <form action="" onSubmit={e => addPostagem(e)}>
                            <h1>Criar Artigo!</h1>
                            <p>Escreva abaixo o contúdo da página WIKI que você deseja criar. O formato aceito é Markdown</p>
                            <TextField
                                sx={{ mb: 2, backgroundColor: "white" }}
                                variant="outlined"
                                type="text"
                                placeholder="Título"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <br />
                            <MDEditor height={400} value={description} onChange={setDescription} />
                            <br />
                            <Button sx={{ mt: 2 }} variant="contained" type="submit" >Enviar</Button>
                        </form>
                    </Box>

                </Grid>

            </Grid>
        </>
    )
}

export default CreatePage;