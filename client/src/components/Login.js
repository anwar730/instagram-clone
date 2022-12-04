import React, { useState } from "react";
import { Form, Button, Alert, Container } from 'react-bootstrap'


function LoginForm({ onLogin, setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
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
    <>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className='w-100' id="headergap" style={{ maxWidth: "370px" }}>
        <div className='text-center pb-3'>
        <h2 style={{fontSize: "65px"}} id="logo">Instagram</h2>
        </div>
        <Form onSubmit={handleSubmit}>
        {errors.map((err) => (
          <Alert variant="danger">{err}</Alert>
        ))}
        <Form.Group id="username">
        <Form.Label>Enter Username*</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
        </Form.Group>

      <Form.Group id="password" className="pt-3" >
        <Form.Label>Enter Password*</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </Form.Group>
      <br />
      <Button className='w-100' id="primary-btn" type="submit">{isLoading ? "Loading..." : "Login"}</Button>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
        </Form>
        <div className="twinsies">
          <p>Don't have an account?  <Button id="transparentbtn" onClick={() => setShowLogin(false)}>Signup</Button> </p>
      </div>
      </div>
      </Container>


      </>
  );
}

export default LoginForm;
