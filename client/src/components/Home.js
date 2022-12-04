import React,{ useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa"
import Comments from './Comments';

function Home({ profile }) {
    const [posts, setPost] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      fetch("/posts")
        .then((r) => r.json())
        .then(setPost);
    }, []);

//     function handlelikes(e){
//       e.preventDefault();  
//       const updateObj = {
//         likes: posts.likes + 1,
//       }
//       fetch(`/likes`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         updateObj
//       }),
//     })
//   }

  return (
    <Container className='d-flex justify-content-center'>
    <div className='row mx-5 d-flex justify-content-center'>
    <div className='col md-5 scroll scroll-h pt-3'>
    <div className='d-flex flex-column'>
    {posts.map((post) => (
      
      <Card style={{ width: '38rem' }} id="insta" className='my-4'>
      <Card.Text className='pt-3'>
         <img src={post.user.profile_pic} alt="sd" className='postimage'/> {post.user.username} 
        </Card.Text>
        {/* <Card.Text>
          {post.user.profile_pic}
        </Card.Text> */}
      <Card.Img variant="top" src={post.image} />
      <Card.Body>
        <Card.Title className='d-flex gap-2'>
          <AiOutlineHeart />
          <FaRegComment onClick={()=>{setOpen(true)}} />
        </Card.Title>
        <Card.Text>
          1{post.likes} likes
        </Card.Text>
        <Card.Text>
          {post.caption} 
        </Card.Text>
      </Card.Body >
      {open && <Comments open={open} profile={profile} post={post} onClose={()=>setOpen(false)} />}
    </Card>
     ))}
     </div>
     </div>
     </div>
  </Container>

  )
}

export default Home