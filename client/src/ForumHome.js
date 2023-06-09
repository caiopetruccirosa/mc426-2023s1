import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Post from './Post';
import UserContext from "./UserContext";
import { Box, Button, Grid, TextField } from "@mui/material";

async function getCommentsByPostId(postId) {
    try {
        const response = await axios.get(`api/comments/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter os comentários:', error);
        return [];
    }
}

// Função principal para buscar os posts e seus comentários
async function getPostsAndComments() {
    try {
        const response = await axios.get('api/posts');
        const posts = response.data;
    
        for (const post of posts) {
            const comments = await getCommentsByPostId(post.id);
            post.answers = comments;
        }
    
        console.log(posts);

        return posts;
    } catch (error) {
        console.error('Erro ao obter os posts:', error);
        return [];
    }
}

function ForumHome() {
    const userInfo = useContext(UserContext)
    const loggedIn = !(!userInfo.username);

    // array de posts mockados, podem apagar quando o server/db estiverem 100%
    //let posts = [
    //    {
    //        id: 1,
    //        author: 'edmotaDaFeec',
    //        date: 'Postado às 23h32, 21 de janeiro de 2031',
    //        relatedArticle: 'MC202',
    //        title: 'gente, alguém recomenda um canal do youtube pra mc202??',
    //        content: 'ate tento ler as coisa que o prof posta no site, mas eu sinto que aprendo bem melhor com videos T_t',
    //        answers: [
    //            {
    //                author: 'computeirahExaustah',
    //                content: 'Eu já sofri muito com essa disciplina. Sinto que quando passei, foi na sorte.',
    //                date: 'Postado às 23h32, 21 de janeiro de 2031',
    //            },
    //            {
    //                author: 'guaranaJesus',
    //                content: 'capaz q se revirar o stackoverflow n encontra nada sobre isso kkkk',
    //                date: 'Postado às 23h32, 21 de janeiro de 2031',
    //            },
    //            {
    //                author: 'joaquinus',
    //                content: 'sinceramente n sei pq vcs se estressam tanto com isso'
    //            }
    //        ]
    //    },
    //    {
    //        id: 2,
    //        author: 'latinoSurtadao',
    //        date: 'Postado às 23h32, 21 de janeiro de 2031',
    //        relatedArticle: 'MC102',
    //        title: 'Surto em lorem ipsum',
    //        content: 'Lorem!!!!!! ipsum!!!!!!! dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis a condimentum vitae sapien pellentesque habitant. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Facilisi morbi tempus iaculis urna id. Dui sapien eget mi proin. Nibh ipsum consequat nisl vel pretium lectus quam id!!!',
    //        answers: []
    //    },
    //    {
    //        id: 3,
    //        author: 'namoral',
    //        date: 'Postado às 23h32, 21 de janeiro de 2031',
    //        relatedArticle: 'MC102',
    //        title: 'gente na moral......',
    //        content: 'o que esta acontecendo',
    //        answers: [
    //            {
    //                author: 'evelynBeCareful',
    //                content: 'tbm n sei mo'
    //            },
    //            {
    //                author: 'leitecon_densado',
    //                content: 'bora agitar ifch ultimo dia do semestre pfvr'
    //            }
    //        ]
    //    }
    //];

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (loggedIn) {
            const fetchData = async () => {
                //try {
                //    console.log(posts)
                //    const response = await axios.get(`/api/posts`);
                //    setPosts(response.data);
                //    console.log(posts)
                //} catch (error) {
                //    console.error(error);
                //}                
                getPostsAndComments().then(posts => {
                    const postsAndComments = posts;
                    setPosts(postsAndComments);
                    console.log(postsAndComments);
                }).catch(error => {
                    console.error('Erro ao obter os posts e seus comentários:', error);
                });
            };
            fetchData();
        }
    }, []);

    return (
        <>
            {loggedIn &&
                <div className="App">
                    {posts.map((post) => (
                        <Post key={post.id}
                            post={post}
                        />
                    ))}
                </div>
            }
            {!loggedIn &&
                <div>Você precisa fazer login para acessar essa página!</div>
            }
        </>
    )
}

export default ForumHome;