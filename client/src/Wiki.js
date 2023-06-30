import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

function Wiki() {
  const userInfo = useContext(UserContext);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/articles');
        setItems(response.data);
      } catch (error) {
        console.error(error);
        setItems(userInfo.allArticles);
      }
    };

    fetchData();
  }, [userInfo.allArticles]);

  if (!userInfo.username) {
    return 'Você precisa fazer login para acessar essa página!';
  }

  const handleArticleClick = (article) => {
    userInfo.setArticle(article.id);
    navigate("/article"); // Assuming "/article" is the route to display the article details
  };

  return (
    <>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid sm={12} item sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
          <Box sx={{ bgcolor: "white", paddingY: 4, paddingX: 10, borderRadius: 2 }}>
           <h2>Artigos</h2>
            <List>
              {items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemButton onClick={() => handleArticleClick(item)}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Wiki;
