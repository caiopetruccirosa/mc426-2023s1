import { Box, Button, Grid, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from "./UserContext";

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [relatedArticle, setRelatedArticle] = useState('');
  const [allArticles, setAllArticles] = useState([]);

  const navigate = useNavigate();
  const userInfo = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/articles');
        setAllArticles(response.data);
      } catch (error) {
        console.error(error);
        setAllArticles(userInfo.allArticles);
      }
    };

    fetchData();
  }, [userInfo.allArticles]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      content: content,
      posterUsername: userInfo.username,
      relatedArticleId: relatedArticle,
      title: title,
    };

    try {
      axios.post('api/posts', post);
    } catch (error) {
      console.error(error);
    }

    window.alert("Seu post foi adicionado ao fórum! Obrigado.");

    navigate('/forum');
  };

  if (!userInfo.username) {
    return 'Você precisa fazer login para acessar essa página!';
  }

  return (
    <Grid container sx={{ justifyContent: "left" }}>
      <Grid sm={12} item sx={{ padding: 1, display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: "column",
            bgcolor: "white",
            width: 800,
            maxHeight: 700,
            borderRadius: 10,
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            textAlign: 'left'
          }}
        >
          <Typography
            sx={{
              mt: 4,
              ml: 4,
              fontSize: '24px',
              fontWeight: 'bold'
            }}>Título do post:
          </Typography>
          <TextField
            sx={{
              mb: 2,
              ml: 6,
              mt: 2,
              backgroundColor: "white",
              width: 700,
              '& input': {
                textAlign: 'left',
              }
            }}
            variant="outlined"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Digite um título para o post"
          />
          <Typography
            sx={{
              mt: 4,
              ml: 4,
              fontSize: '24px',
              fontWeight: 'bold'
            }}>Conteúdo do post:
          </Typography>
          <OutlinedInput multiline
            rows={4}
            sx={{
              mb: 2,
              ml: 6,
              mt: 2,
              backgroundColor: "white",
              width: 700,
              '& input': {
                textAlign: 'left',
              }
            }}
            required
            placeholder="Digite o conteúdo do post"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Typography
            sx={{
              mt: 4,
              ml: 4,
              fontSize: '24px',
              fontWeight: 'bold'
            }}>Artigo da Wiki relacionado:
          </Typography>
          <Select
            sx={{
              mb: 2,
              ml: 6,
              mt: 2,
              backgroundColor: "white",
              width: 700,
            }}
            required
            value={relatedArticle}
            onChange={(e) => setRelatedArticle(e.target.value)}
          >
            {allArticles.map((item) => (
              <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
            ))}
          </Select>
          <div style={{ flex: 1 }}></div>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 2,
                mr: 1,
                ml: 6,
                mb: 3
              }}
              onClick={handleSubmit}
            >
              Criar post
            </Button>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
