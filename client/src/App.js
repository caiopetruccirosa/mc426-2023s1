import "./App.css";

import { BrowserRouter } from "react-router-dom";
import UserContext from "./UserContext";
import { useState, useContext } from "react";
import Menu from "./Menu";

function App() {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [text, setText] = useState("");

  // useEffect(() => {
  //   axios
  //     .post(
  //       "https://api-todo-list-six.vercel.app/user",
  //       { id: userInfo.id },
  //       { withCredentials: true }
  //     )
  //     .then((response) => {
  //       setEmail(response.data.email);
  //     });
  // }, []);

  //FUNÇÃO MOCKADA ENQUANTO N TEMOS O ENDPOINT


  // function logout() {

  //   setEmail('')
  // }

  // function logout(){
  //   axios.post('https://api-todo-list-six.vercel.app/logout', {}, {withCredentials:true})
  //   .then(()=>{
  //     setEmail('')
  //   })
  // }

  return (
    <UserContext.Provider value={{ username, setUsername, id, setId, text, setText }}>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
