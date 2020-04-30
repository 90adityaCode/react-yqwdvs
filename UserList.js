import React from 'react';

const UserList  = ()=>{
   
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('')
   const [post, setPost] = useState({});
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then( post =>{
      setLoading(false);
      console.log(post)
    })
    .catch(error =>{
      
    })
   }, []);


  const handleClick = ()=>{
    setCount(count + 1);
  }
  return (
    <>
    <h6>User List!</h6>
    </>
    );
}