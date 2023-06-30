import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button, Grid, TextField } from "@mui/material";
import axios from 'axios';
import moment from 'moment';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from "./UserContext";

const Post = ({ post }) => {
  const [answerContent, setAnswerContent] = useState('')
  const [like, setLike] = useState(0)
  const [likeClicked, setLikeClicked] = useState(false)

  const userInfo = useContext(UserContext) ?? { username: 'mockUser' };

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

  const handleRelatedArticle = () => {
    userInfo.setArticle(post.relatedArticleId)
    navigate(`/article`);
  }

  const handleAnswer = (e) => {
    const data = {
      postId: post.id,
      authorUsername: userInfo.username,
      text: answerContent
    }

    try {
      axios.post('api/comments', data)
    } catch (error) {
      console.error(error)
    }

    window.alert("Sua resposta foi adicionada! Obrigado.");

    // limpar campo de resposta apos pop up
    setAnswerContent('');
  }

  const handleClick = (postId) => {
    navigate(`/forum/answers/${postId}`, { state: { post } });
  }

  const postDate = moment(new Date(post.timestamp)).format('HH:mm - DD/MM/YYYY')

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
            borderRadius: 10,
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            textAlign: 'left'
          }}
        >
          <Box
            sx={{
              bgcolor: "#e7e7e7",
              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              height: 170,
              paddingY: 0.5,
              paddingX: 4,
            }}
          >
            <h3>{post.title}</h3>
            <p>@{post.posterUsername} -- {postDate}</p>
            <h4>
              <Button
                variant="contained"
                type="submit"
                onClick={handleRelatedArticle}
                sx={{ ml: 1 }}
              >Artigo relacionado
              </Button>
            </h4>
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
                color="primary"
                type="submit"
                sx={{ mr: 1 }}
                onClick={likePost}
              >
                <FavoriteIcon sx={{ color: likeClicked ? 'red' : 'white', mr: 1 }} />
                ({like})
              </Button>
              {<Button
                variant="contained"
                type="submit"
                onClick={() => handleClick(post.id)}
                sx={{ ml: 1, mr: 1 }}
              >Ver respostas ({post.answers.length})
              </Button>}
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