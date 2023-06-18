import { useContext, useState } from "react";
import Answer from './Answer';
import Post from './Post';
import UserContext from "./UserContext";


function PostAnswers() {

    let posts = [
        {
            author: 'autor1',
            title: 'titulo1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Accumsan lacus vel facilisis volutpat est velit egestas. Ac placerat vestibulum lectus mauris ultrices eros in. Mi tempus imperdiet nulla malesuada.',
        }
    ];

    let answers = [
        {
            author: 'autor2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        },
        {
            author: 'autor3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        },
        {
            author: 'autor4',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        },
    ];

    return (
        <>
        <div className="App">
        {posts.map((item, index) => (
            <Post key={index}
                  title = {item.title}
                  author = {item.author}
                  content = {item.content}
            />
      ))}
        {answers.map((item, index) => (
            <Answer key={index}
                    author = {item.author}
                    content = {item.content}
            />
      ))}
    </div>
      </>
    )
}

export default PostAnswers;