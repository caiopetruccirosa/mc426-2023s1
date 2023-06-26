import { useLocation } from "react-router-dom";
import Answer from './Answer';
import Post from './Post';
import { useContext } from "react";
import UserContext from "./UserContext";


function PostAnswers() {
  const userInfo = useContext(UserContext)


  const location = useLocation();
  const { post } = location.state;


  if (!userInfo.username) {
    return 'Você precisa fazer login para acessar essa página mc102!';
  }
  return (
    <>
      <div>
        <Post post={post} />
        {post.answers.map((item, index) => (
          <Answer key={index}
            author={item.author}
            content={item.content}
            date={item.date}
          />
        ))}
      </div>
    </>
  )
}

export default PostAnswers;