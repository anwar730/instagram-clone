import React from 'react'
import { Card, Container } from 'react-bootstrap'

// const [images, setImages] = ([])

function MyPosts({ profile }) {
  return (
    <Container className='pt-2'>
    <div className='myposts'>
    {profile.posts.map((prof) => {
      if (!prof) {
        return (
          <div>go post !!!!!!!!!!!!</div>
        )
      }
      else
      return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prof.image} />
    </Card>
)})}
</div>
  </Container>
  )
}
export default MyPosts