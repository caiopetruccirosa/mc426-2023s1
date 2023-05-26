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
import Menu from "./Menu";
import MC102 from "./MC102";
import MC202 from "./MC202";
import MC322 from "./MC322";

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
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/MC102" element={<MC102 />} />
            <Route path="/MC202" element={<MC202 />} />
            <Route path="/MC322" element={<MC322 />} />
          </Routes>
        </main>

      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
