import { useLocation } from "react-router-dom";
import Answer from './Answer';
import Post from './Post';


function PostAnswers() {

    const location = useLocation();
    const { post } = location.state;

    return (
        <>
        <div>
            <Post post = {post}/>
        {post.answers.map((item, index) => (
            <Answer key={index}
                    author = {item.author}
                    content = {item.content}
                    date = {item.date}
            />
      ))}
    </div>
      </>
    )
}

export default PostAnswers;