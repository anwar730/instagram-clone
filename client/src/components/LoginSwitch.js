import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

function LoginSwitch({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true)
  return (
    <>
      {showLogin ? (
        <>
          <Login onLogin={onLogin} setShowLogin={setShowLogin}/>
        </>
      ) : (
        <>
          <SignUp onLogin={onLogin} setShowLogin={setShowLogin}/>
        </>
      )}
    </>
  )
}

export default LoginSwitch