import React from 'react'
import { Container } from 'react-bootstrap'
import Tabswitch from './Tabswitch'

function Profile({ profile }) {
  return (
    <>
    <Container className='pt-3 d-flex justify-content-center'>
        <div className='text-center'>
            <img class="pic" src={profile.profile_pic} alt="pfp" />
            <div className='pt-3' id="y" >
            <h2>{profile.username}</h2>
            <p>{profile.email}</p>
            </div>
    </div>
    </Container>
    <Tabswitch profile={profile}/>
    </>
  )
}

export default Profile