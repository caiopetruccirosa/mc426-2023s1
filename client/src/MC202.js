import { useContext, useState } from "react";
import UserContext from "./UserContext";

function MC202() {

    const userInfo = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    if (!userInfo.username) {
        return 'Você precisa fazer login para acessar essa página! MC202';
    }

    //FUNÇAÕ MOCKADA ENQUANTO N TEMOS O ENDPOINT

    function addPostagem(e) {
        e.preventDefault();
        if (title && text && userInfo.email) {
            window.alert("Sua postagem com o título: " + title + " foi criada! Obrigado " + userInfo.email)
        }
    }

    return (
        <>
            <form onSubmit={e => addPostagem(e)}>
                <h1>MC202</h1>
                <input placeholder={'Título'} value={title} onChange={e => setTitle(e.target.value)} />
                <input style={{ height: "150px", textAlign: "center", }} placeholder={'Conteúdo'} value={text} onChange={e => setText(e.target.value)} />
                <button type="submit">Enviar</button>

            </form>
        </>
    )
}

export default MC202;