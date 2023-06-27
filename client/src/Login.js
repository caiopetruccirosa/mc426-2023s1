import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";
import { Box, Button, ButtonBase, Grid, TextField } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const user = useContext(UserContext);


  //FUNÇÃO DE LOGIN MOCKADA ENQUANTO N TENHO O ENDPOINT

  // function loginUser(e) {
  //   e.preventDefault();
  //   if (email !== "") {

  //     user.setEmail(email);
  //     user.setId(id);
  //     setEmail("");
  //     setId("");
  //     setPassword("");
  //     setRedirect(true);


  //   } else {
  //     window.alert("ERRO DE LOGIN! Email ou senha incorretos!");
  //   }
  // }

  function loginUser(e) {
    e.preventDefault();
    if (username !== "") {
      const data = { username, password };
      axios
        .post('/api/auth/signin', data, {
          withCredentials: false,
        })
        .then((response) => {
          console.log(response)
          user.setUsername(response.data.user.username);
          setUsername("");
          setPassword("");
          setLoginError(false);
          setRedirect(true);
        })
        .catch((error) => {
          console.log(error)
          window.alert(`Erro: ${error.response.data.message}`)
        });
    } else {
      setLoginError(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/wiki"} />;
  }

  return (
    <>
      <Grid container sx={{ justifyContent: "center", }}>
        <Grid sm={12} item sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
          <Box sx={{ bgcolor: "white", paddingY: 4, paddingX: 10, borderRadius: 2 }}>
            <form action="" onSubmit={(e) => loginUser(e)}>
              <h1>Bem Vindo!</h1>
              <h2>Entre para acessar o fórum</h2>
              <TextField
                sx={{ mb: 2, backgroundColor: "white" }}
                variant="outlined"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              <p>Ainda não tem uma conta? Clique em Cadastro</p>
              <Button variant="contained" type="submit" >Entrar</Button>
            </form>
          </Box>
        </Grid>

      </Grid>
    </>
  );
}

export default Login;
