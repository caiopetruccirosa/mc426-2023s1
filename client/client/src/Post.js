import React from 'react';
import { Box, Button, Grid, TextField } from "@mui/material";

const Post = ({ title, author, content }) => {
    return (
        <Grid container sx={{ justifyContent: "left" }}>
          <Grid sm={12} item sx={{ padding: 1, display: "flex", justifyContent: "center" }}>
            <Box 
              sx={{
                display: 'flex',
                flexDirection: "column",
                bgcolor: "white",
                width: 600,
                height: 500,
                //paddingY: 2,
                //paddingX: 6,
                borderRadius: 10,
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                textAlign: 'left' 
               }}
            >
                <Box
                  sx = {{
                    bgcolor: "#e7e7e7",
                    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                    height: 110,
                    paddingY: 0.5,
                    paddingX: 4,
                  }}
                >
                  <h3>{title}</h3>
                  <p>{author} -- Postado às 23h32, 21 de janeiro de 2031</p>
                </Box>
                <Box
                  sx = {{
                    paddingY: 1,
                    paddingX: 4,
                  }}>
                  <p>{content}</p>
                </Box>
                <div style={{ flex: 1 }}></div>
                <Box
                  sx = {{
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
                      backgroundColor: "white" ,
                      width: 350,
                      '& input::placeholder': {
                          textAlign: 'left',
                        }
                    }}
                    variant="outlined"
                    type="email"
                    placeholder="Digite uma resposta para o post"
                  />
                  <Button variant="outlined" type="submit" sx={{ padding: 1, height: 55}} >Enviar resposta</Button>
                  <div
                    sx ={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Button variant="contained" type="submit" sx={{ mr: 1}}>Ver respostas</Button>
                    <Button variant="contained" type="submit" sx={{ ml: 1, mr: 1}}>Compartilhar</Button>
                    <Button variant="contained" type="submit" sx={{ ml: 1}}>Denunciar</Button>
                  </div>
                </Box>
            </Box>
          </Grid>
        </Grid>
  );
};

export default Post;
