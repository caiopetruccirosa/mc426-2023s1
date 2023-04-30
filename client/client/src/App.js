import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import UserContext from "./UserContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Login from "./Login";
import Home from "./Home";
import Info from "./Info";

function App() {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const userInfo = useContext(UserContext);

  useEffect(() => {
    axios
      .post(
        "https://api-todo-list-six.vercel.app/user",
        { id: userInfo.id },
        { withCredentials: true }
      )
      .then((response) => {
        setEmail(response.data.email);
      });
  }, []);

  //FUNÇÃO MOCKADA ENQUANTO N TEMOS O ENDPOINT


  function logout() {

    setEmail('')
  }

  // function logout(){
  //   axios.post('https://api-todo-list-six.vercel.app/logout', {}, {withCredentials:true})
  //   .then(()=>{
  //     setEmail('')
  //   })
  // }

  return (
    <UserContext.Provider value={{ email, setEmail, id, setId }}>
      <BrowserRouter>
        <nav>
          <Link to={"/home"}>Home</Link>
          {!email && (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Cadastro</Link>
            </>
          )}
          {!!email && <a onClick={() => logout()}>Logout</a>}
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;