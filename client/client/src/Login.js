import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";
import { Box, Button, ButtonBase, Grid, TextField } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const user = useContext(UserContext);


  //FUNÇÃO DE LOGIN MOCKADA ENQUANTO N TENHO O ENDPOINT

  function loginUser(e) {
    e.preventDefault();
    if (email !== "") {

      user.setEmail(email);
      user.setId(id);
      setEmail("");
      setId("");
      setPassword("");
      setRedirect(true);


    } else {
      window.alert("ERRO DE LOGIN! Email ou senha incorretos!");
    }
  }

  // function loginUser(e) {
  //   e.preventDefault();
  //   if (email !== "") {
  //     const data = { email, password };
  //     axios
  //       .post("", data, {
  //         withCredentials: true,
  //       })
  //       .then((response) => {
  //         user.setEmail(response.data.email);
  //         user.setId(response.data.id);
  //         setEmail("");
  //         setId("");
  //         setPassword("");
  //         setLoginError(false);
  //         setRedirect(true);
  //       })
  //       .catch(() => { });
  //   } else {
  //     setLoginError(true);
  //   }
  // }

  if (redirect) {
    return <Navigate to={"/home"} />;
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
