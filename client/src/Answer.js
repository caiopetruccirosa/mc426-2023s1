import React from 'react';
import { Box, Button, Grid, TextField } from "@mui/material";

const Answer = ({ author, content, date }) => {
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
                  sx = {{
                    bgcolor: "#e7e7e7",
                    borderRadius: 10,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 10,
                    height: 60,
                    paddingY: 0.5,
                    paddingX: 4,
                  }}
                >
                  <p>{author} -- {date}</p>
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
                    bgcolor: "white",
                    maxHeight: 160,
                    borderRadius: 10,
                    paddingY: 2,
                    paddingX: 4,
                  }}>
                  <div
                    sx ={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Button variant="contained" type="submit" sx={{ ml: 1, mr: 1}}>Compartilhar</Button>
                    <Button variant="contained" type="submit" sx={{ ml: 1}}>Denunciar</Button>
                  </div>
                </Box>
            </Box>
          </Grid>
        </Grid>
  );
};

export default Answer;
