import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css'; // Import custom CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (validateForm()) {
      // Add your login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      // Reset form fields
      setEmail('');
      setPassword('');
    }
  };

  const validateForm = () => {
    // Validate email and password fields
    if (!email || !password) {
      // If email or password is empty, display error message
      alert('Please enter both email and password');
      return false;
    }
    return true;
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center align-items-center vh-100">
          <Col md={6}>
            <div className="login-box">
              <h2 className="text-danger mb-2">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="danger" type="submit" className="w-100 my-2">
                  Login
                </Button>

                <div className="my-2 text-black w-100 text-center">
                  Create a new Account? 
                  <a href="/signup" className='text-decoration-none text-danger'>
                    Signup..
                  </a>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
