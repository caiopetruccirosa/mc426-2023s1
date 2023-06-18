import Post from './Post';


function ForumHome() {
    let posts = [
        {
            author: 'autor1',
            title: 'titulo1',
            content: 'teste',
        },
        {
            author: 'autor2',
            title: 'titulo2',
            content: 'teste'
        }
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
    </div>
      </>
    )
}

export default ForumHome;