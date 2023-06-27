import axios from "axios";
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import UserContext from "./UserContext";

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [relatedArticle, setRelatedArticle] = useState('')

  const navigate = useNavigate();

  const userInfo = useContext(UserContext);
  if (!userInfo.username) {
    return 'Você precisa fazer login para acessar essa página!';
  }

  // funcao chamada ao clicar no botao "criar post"
  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      content: content,
      posterUsername: userInfo.username,
      relatedArticle: relatedArticle,
      title: title,
    };

    // ESPECIFICAR ENDPOINT DA REQUEST DE CRIAR POST
    /*
    try 
    {
      axios.post('api/endpointDeCriarPost', {post})
    }

    catch(error)
    {
      console.error(error)
    }
    */

    window.alert("Seu post foi adicionado ao fórum! Obrigado.");

    navigate('/forum');
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
            {userInfo.allArticles.map((item) => {
              return (
                <MenuItem value={item.title}>{item.title}</MenuItem>

              )
            })}

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
