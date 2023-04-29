import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

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
      setLoginError(false);
      setRedirect(true);


    } else {
      setLoginError(true);
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
      <form action="" onSubmit={(e) => loginUser(e)}>
        <h1>Bem Vindo!</h1>
        <h2>Entre para acessar o fórum</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <p>Ainda não tem uma conta? Clique em Cadastro</p>
        <button type="submit">Entrar</button>
        {loginError && (
          <div className={"error"}>
            <h2
              style={{
                padding: 10,
                marginTop: 150,
                color: "red",
                backgroundColor: "#f0f0f0",
                borderRadius: 5,
              }}
            >
              ERRO DE LOGIN! Email ou senha incorretos!
            </h2>
          </div>
        )}
      </form>
    </>
  );
}

export default Login;
