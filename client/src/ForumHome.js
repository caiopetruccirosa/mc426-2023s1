import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Post from './Post';
import UserContext from "./UserContext";

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

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (loggedIn) {
            const fetchData = async () => {

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