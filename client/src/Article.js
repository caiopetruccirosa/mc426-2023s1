import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Box } from "@mui/material";

function Article() {
  const userInfo = useContext(UserContext);
  const [article, setArticle] = useState({});

  const loggedIn = !(!userInfo.username);

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
  }, []);

  return (
    <>
      {loggedIn &&
        (
          <>

            <h1>{article.title}</h1>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left", bgcolor: "#cfe2e8", marginX: 2 }}>
              <ReactMarkdown children={article.content} />
            </Box>
          </>
        )
      }
      {!loggedIn &&
        <div>Você precisa fazer login para acessar essa página!</div>
      }
    </>
  )
}

export default Article;
