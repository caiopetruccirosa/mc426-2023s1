import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Box } from "@mui/material";

function Article() {

    const userInfo = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState({});

    console.log(userInfo)
    if (!userInfo.username) {
        return 'Você precisa fazer login para acessar essa página mc102!';
    }

    //FUNÇAÕ MOCKADA ENQUANTO N TEMOS O ENDPOINT

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/api/articles/${userInfo.article}`);
          setArticle(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, {});

    return (
        <>
          {
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left", bgcolor: "#cfe2e8", marginX: 2 }}>
              <ReactMarkdown children={article.content} />
              {/* <div dangerouslySetInnerHTML={{ __html: texto }}></div> */}
            </Box>
          }
        </>
    )
}

export default Article;
