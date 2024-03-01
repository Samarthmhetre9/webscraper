import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './login.css'; // Import custom CSS file for styling

const Signup = () => {
  // State variables to manage form fields and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation logic
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }

    // If there are errors, set them in state and return
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If no errors, proceed with form submission logic
    console.log("Form submitted!");
    // Add your form submission logic here
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center align-items-center vh-100">
          <Col md={6}>
            <div className="login-box">
              <h2 className="text-danger mb-2">Sign Up</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="danger" type="submit" className="w-100 my-2">
                  Sign Up
                </Button>

                <div className="my-2 text-black w-100 text-center">
                  Already have an Account? 
                  <a href="/Login" className='text-decoration-none text-danger'>
                    Login..
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

export default Signup;

