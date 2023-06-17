import { useState, useContext } from "react";
import axios from 'axios';
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";
import { Box, Button, Grid, TextField } from "@mui/material";


function Register() {

    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const user = useContext(UserContext);

    //FUNÇÃO MOCKADA ENQUANTO N TEMOS O ENDPOINT


    function registerUser(e) {
        e.preventDefault();

        if (email !== "") {

            user.setEmail(email);
            user.setId(id);
            setEmail("");
            setId("");
            setPassword("");
            setRedirect(true);

        }
    }


    if (redirect) {
        return <Navigate to={"/home"} />;
    }

    // function registerUser(e) {
    //     e.preventDefault();

    //     const data = { email, password };
    //     axios.post('', data, { withCredentials: true })
    //         .then(response => {
    //             user.setEmail(response.data.email);
    //             user.setId(response.data.id);
    //             setEmail('');
    //             setId('');
    //             setPassword('');
    //             setRedirect(true)
    //         })

    // }

    // if (redirect) {
    //     return <Navigate to={'/home'} />
    // }

    return (
        <Grid container sx={{ justifyContent: "center", }}>
        <Grid sm={12} item sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
          <Box sx={{ bgcolor: "white", paddingY: 4, paddingX: 10, borderRadius: 2 }}>
            <form action="" onSubmit={e => registerUser(e)}>
              <h1>Bem Vindo!</h1>
              <h2>Crie uma conta para acessar o fórum!</h2>
              <TextField
                sx={{ mb: 2, backgroundColor: "white" }}
                variant="outlined"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <TextField
                sx={{ backgroundColor: "white" }}
                variant="outlined"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <Button sx={{mt:2}} variant="contained" type="submit" >Cadastrar</Button>
            </form>
          </Box>
        </Grid>

      </Grid>
    )
}

export default Register;