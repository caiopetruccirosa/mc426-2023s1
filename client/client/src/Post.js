import React from 'react';
import { Box, Button, Grid, TextField } from "@mui/material";

const Post = ({ title, author, content }) => {
    return (
        <Grid container sx={{ justifyContent: "left" }}>
          <Grid sm={12} item sx={{ padding: 1, display: "flex", justifyContent: "center" }}>
            <Box 
              sx={{ 
                bgcolor: "white",
                width: 600,
                height: 500,
                paddingY: 2,
                paddingX: 6,
                borderRadius: 2,
                textAlign: 'left' 
               }}
            >
                <h3>{title}</h3>
                <p>{author} -- Postado às 23h32, 21 de janeiro de 2031</p>
                <br />
                <p>{content}</p>
                <TextField
                  sx={{ 
                    mb: 2,
                    mr: 1,
                    backgroundColor: "white" ,
                    width: 350,
                    '& input::placeholder': {
                        textAlign: 'left',
                      },
                    marginTop: 12
                  }}
                  variant="outlined"
                  type="email"
                  placeholder="Digite uma resposta para o post"
                />
                <Button variant="outlined" type="submit" sx={{ padding: 1, height: 55, marginTop: 12}} >Enviar resposta</Button>
                <br />
                <Button variant="contained" type="submit" sx={{ mr: 1 }}>Ver respostas</Button>
                <Button variant="contained" type="submit" sx={{ ml: 1, mr: 1}}>Compartilhar</Button>
                <Button variant="contained" type="submit" sx={{ ml: 1}}>Denunciar</Button>
            </Box>
          </Grid>
  
        </Grid>
  );
};

export default Post;
