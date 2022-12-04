import React, { useState } from "react";
import { Form, Button, Alert, Container } from 'react-bootstrap'


function Signup({ onLogin, setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("https://i.pinimg.com/736x/f9/96/8d/f9968df268c7dab39bef20cff0a058cf.jpg");
  const [followers, setFollowers] = useState("0")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
        profile_pic: profile,
        followers
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "370px" }}>
         <div className='text-center pb-3'>
            <h2 style={{fontSize: "65px"}} id="logo">Instagram</h2>
            <p>sign up to get started and enjoy the platform with your friends</p>
        </div>
          {errors.map((err) => (
          <Alert variant="danger">{err}</Alert>
        ))}
        <Form onSubmit={handleSubmit}>
        <Form.Group id="username">
        <Form.Label>Your fullname*</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
        </Form.Group>
        <Form.Group id="email">
        <Form.Label>Email address*</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </Form.Group>

      <Form.Group id="password">
        <Form.Label>Create Password*</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </Form.Group>
      <Form.Group id="password_confirmation">
        <Form.Label>Password Confirmation*</Form.Label>
        <Form.Control
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </Form.Group>
      <br />
      <Button className='w-100' id="primary-btn" type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
        </Form>
        <div className="twinsies">
          <p>Already have an account? <Button id="transparentbtn" onClick={() => setShowLogin(true)}>Login</Button></p>
      </div>
      </div>
      </Container>
  );
}

export default Signup;
