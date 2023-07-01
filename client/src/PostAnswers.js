import moment from 'moment';
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Answer from './Answer';
import Post from './Post';
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
        {post.answers.map((item) => (
          <Answer key={item.id}
            author={item.authorUsername}
            content={item.text}
            date={moment(new Date(item.timestamp)).format('HH:mm - DD/MM/YYYY')}
          />
        ))}
      </div>
    </>
  )
}

export default PostAnswers;