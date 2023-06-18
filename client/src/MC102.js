import { useContext, useState } from "react";
import UserContext from "./UserContext";
import { Box } from "@mui/material";

function MC102() {

    const userInfo = useContext(UserContext);

    console.log(userInfo)
    if (!userInfo.username) {
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