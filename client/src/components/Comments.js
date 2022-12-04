import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

function Comments({ onClose, profile, post}) {
  const [content, setContent] = useState("");
  const [postId, setPostId] = useState(post.id);
  const [userId, setUserId] = useState(profile.id);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
      setErrors([]);
      setIsLoading(true);
      fetch("/postcomments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          post_id: postId,
          user_id: userId,
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((data) => console.log(data));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

  return (
    <>
      <div className="overlay">
      <div className="overlay-inner">
      <Container className="d-flex justify-content-center" style={{ minHeight: "50vh" }}>
      <div className='w-100' style={{ maxWidth: "370px" }}>
        <button className="close" onClick={onClose}>X</button>
        <br/>
            <h4 style={{ textAlign: "center", paddingBottom: "30px" }}>Comments</h4>
            {post.comments.map(C=><p>{C.content}</p>)}
            <Form onSubmit={handleSubmit} className="d-flex gap-1">
                <Form.Group id="image">
                    <Form.Control name="image_url" 
                    placeholder="comment" 
                    type="text" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                    required/>
                </Form.Group>
                <br />
                <Button className='w-20' id="primary-btn" type="submit">{isLoading ? "Loading..." : "post"}</Button>
            </Form>
      </div>
      </Container>
      </div>
  </div>
    </>
)
}

export default Comments