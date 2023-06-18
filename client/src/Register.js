import { useState, useContext } from "react";
import axios from 'axios';
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";
import { Box, Button, Grid, TextField } from "@mui/material";

function Register() {

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);


  const user = useContext(UserContext);


  function registerUser(e) {
    e.preventDefault();
    if (email !== "") {
      const data = { email, username, nickname, password };
      axios
        .post('/api/auth/signup', data, {
          withCredentials: false,
        })
        .then((response) => {
          console.log(response)
          user.setUsername(username);
          user.setId(id);
          setEmail("");
          setNickname("");
          setUsername("");
          setId("");
          setPassword("");
          setRedirect(true);
        })
        .catch((error) => {
          console.log(error)
          window.alert(`Erro: ${error.response.data.message}`)
        });
    } else {
    }
  }


  if (redirect) {
    return <Navigate to={"/home"} />;
  }

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
              sx={{ mb: 2, backgroundColor: "white" }}
              variant="outlined"
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <TextField
              sx={{ mb: 2, backgroundColor: "white" }}
              variant="outlined"
              type="nickname"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
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
            <Button sx={{ mt: 2 }} variant="contained" type="submit" >Cadastrar</Button>
          </form>
        </Box>
      </Grid>

    </Grid>
  )
}

export default Register;
