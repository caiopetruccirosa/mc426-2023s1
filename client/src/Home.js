import { useContext, useState } from "react";
import UserContext from "./UserContext";
import { Box, Button, Grid, TextField } from "@mui/material";

function Home() {

    const userInfo = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');



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


    function registerUser(e) {
        e.preventDefault();


    }


    return (
        <>
            <Grid container sx={{ justifyContent: "center", }}>
                <Grid sm={12} item sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
                    <Box sx={{ bgcolor: "white", paddingY: 4, paddingX: 10, borderRadius: 2 }}>
                        <form action="" onSubmit={e => registerUser(e)}>
                            <h1>Criar Postagem!</h1>
                            <TextField
                                sx={{ mb: 2, backgroundColor: "white" }}
                                variant="outlined"
                                type="text"
                                placeholder="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <br />
                            <TextField
                                sx={{ backgroundColor: "white", }}
                                variant="outlined"
                                type="text"
                                multiline
                                placeholder="texto"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <br />
                            <Button sx={{ mt: 2 }} variant="contained" type="submit" >Enviar</Button>
                        </form>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Home;