import React, { useContext, useState } from 'react';
import { Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import UserContext from "./UserContext";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = ({ post }) => {
  const [answerContent, setAnswerContent] = useState('')
  const [like, setLike] = useState(0)
  const [likeClicked, setLikeClicked] = useState(false)

  const userInfo = useContext(UserContext) ?? {username: 'mockUser'};

  const likePost = () => {
    if (likeClicked) {
      setLike(like - 1)
      setLikeClicked(false)
    } else {
      setLike(like + 1)
      setLikeClicked(true)
    }

  }

  const navigate = useNavigate();

  const handleAnswer = (e) => {

    const answer = {
      author: userInfo.username,
      content: answerContent,
      date: new Date()
    }

    const data = {
      id: post.id,
      answer: answer
    }

      // ESPECIFICAR ENDPOINT DA REQUEST DE CRIAR ANSWER (DE UM POST)
      /*
      try 
      {
        axios.post('api/endpointDeCriarResposta', data)
      }

      catch(error)
      {
        console.error(error)
      }
      */

    window.alert("Sua resposta foi adicionada! Obrigado.");

    // limpar campo de resposta apos pop up
    setAnswerContent('');
  }

  const handleClick = (postId) => {

    navigate(`/forum/answers/${postId}`, { state: {post} });
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
            maxHeight: 500,
            //paddingY: 2,
            //paddingX: 6,
            borderRadius: 10,
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            textAlign: 'left'
          }}
        >
          <Box
            sx={{
              bgcolor: "#e7e7e7",
              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              height: 110,
              paddingY: 0.5,
              paddingX: 4,
            }}
          >
            <h3>{post.title}</h3>
            <p>@{post.author} -- {post.date}</p>
          </Box>
          <Box
            sx={{
              paddingY: 1,
              paddingX: 4,
            }}>
            <p>{post.content}</p>
          </Box>
          <div style={{ flex: 1 }}></div>

          <Box
            sx={{
              bgcolor: "#e7e7e7",
              height: 140,
              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              paddingY: 2,
              paddingX: 4,
            }}>
            <TextField
              sx={{
                mb: 2,
                mr: 1,
                backgroundColor: "white",
                width: 350,
                '& input': {
                  textAlign: 'left',
                }
              }}
              variant="outlined"
              value={answerContent}
              onChange={(e) => setAnswerContent(e.target.value)}
              type="text"
              placeholder="Digite uma resposta para o post"
            />
            <Button 
              variant="outlined" 
              type="submit"
              onClick={handleAnswer}
              sx={{ padding: 1, height: 55 }} 
            > Enviar resposta</Button>
            <div
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Button 
                variant="contained" 
                type="submit"
                onClick={() => handleClick(post.id)}
                sx={{ mr: 1 }}
              >Ver respostas ({post.answers.length})
              </Button>
              <Button variant="contained" type="submit" sx={{ ml: 1, mr: 1 }}>Compartilhar</Button>
              <Button variant="contained" type="submit" sx={{ ml: 1 }}>Denunciar</Button>
            </div>
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
};

export default Post;
