import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Box } from "@mui/material";

function MC102() {

    const userInfo = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    if (!userInfo.email) {
        return 'Você precisa fazer login para acessar essa página mc102!';
    }

    //FUNÇAÕ MOCKADA ENQUANTO N TEMOS O ENDPOINT

    const texto = userInfo.text
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left", bgcolor: "#cfe2e8", marginX: 2 }}>
                <h1>Mc102</h1>
                {/* <ReactMarkdown children={texto} /> */}
                <div dangerouslySetInnerHTML={{ __html: texto }}></div>
            </Box>
        </>
    )
}

export default MC102;