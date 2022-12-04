import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import MyPosts from './MyPosts'
import EditProfile from './EditProfile'

function Tabswitch({profile}) {
    return (
      <Container className='d-flex flex-column align-items-center pt-5'>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Posts">
          <MyPosts profile={profile} />
        </Tab>
        <Tab eventKey="profile" title="Edit profile">
          <EditProfile profile={profile}/>
        </Tab>
      </Tabs>
    </Container>
    )
}

export default Tabswitch