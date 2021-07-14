import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
  }, [])

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
              <h1>
                <Link to={`/blog/post/${post.id}`}>{post.title}</Link>
              </h1>
              
              <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
