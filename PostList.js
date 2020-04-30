import React, {useState, useEffect} from "react";

const PostList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
      .then(post => {
        
        setLoading(true);
        setPost(post);
        console.log('response', loading);
      })
      .catch(error => {});
  }, []);
  
  return (
    
    <> 
      <p>All Post! {loading}</p>
      <ul>
      {!loading? (<span>Loading...</span>)
       : 
       (post.map((post)=>{
        <li><span>{post.userId}</span><span> {post.title} </span><span>{post.title}</span> </li> 
      }))
      }
      
      </ul>
    </>
  );
};

export default PostList;
