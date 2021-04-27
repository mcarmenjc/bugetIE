import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import '../styles/Login.css'

function Login() {
  return (
    <Container fluent>
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Card>
            <Card.Header>
              Login
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="emailAddress">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="rememberMe">
                  <Form.Check type="checkbox" label="Remember me?" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <Row className="login-links">
                <Col xs md="6">
                  <Card.Link href="/user/forgot-password">Forgot your password?</Card.Link>
                </Col>
                <Col xs md="6" className="text-right">
                  <Card.Link href="/user/register">Register as a new user</Card.Link>  
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
