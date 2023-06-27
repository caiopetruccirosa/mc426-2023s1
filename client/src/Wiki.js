import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Box, Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';


function Wiki() {

    const userInfo = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');



    if (!userInfo.username) {
        return 'Você precisa fazer login para acessar essa página!';
    }

    //FUNÇAÕ MOCKADA ENQUANTO N TEMOS O ENDPOINT

    function addPostagem(e) {
        e.preventDefault();
        if (title && text && userInfo.email) {
            window.alert("Sua postagem com o título: " + title + " foi criada! Obrigado " + userInfo.email)
        }
    }

    // function addPostagem(e) {
    //     e.preventDefault();
    //     axios.put('https://api-todo-list-six.vercel.app/todos', { title: title, text: text, user: userInfo.email }, { withCredentials: true })
    //         .then(response => {

    //             setTitle('');
    //         })
    // }




    //FUNÇÃO MOCKADA ENQUANTO N TEMOS O ENDPOINT
    const items = userInfo.allArticles


    return (
        <>
            <Grid container sx={{ justifyContent: "center", }}>
                <Grid sm={12} item sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
                    <Box sx={{ bgcolor: "white", paddingY: 4, paddingX: 10, borderRadius: 2 }}>
                        <List>
                            {items.map((item, index) => (
                                <Link index={index} className='link-custom' to={"/article"} onClick={() => userInfo.setArticle(item.description)}>
                                    <ListItem key={index}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={item.title} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link >
                            ))}
                        </List>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Wiki;