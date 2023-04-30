import { useState, useContext } from "react";
import axios from 'axios';
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";


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
        <form action="" onSubmit={e => registerUser(e)}>
            <h1>Bem Vindo!</h1>
            <h2>Crie uma conta para acessar o fórum!</h2>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default Register;