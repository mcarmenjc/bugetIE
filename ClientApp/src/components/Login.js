import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import '../styles/Login.css'

function Login() {
  const [formState, setFormState] = useState(
    {
      emailAddress: {
        value: '',
        isInvalid: false
      },
      password: {
        value: '',
        isInvalid: false
      },
      rememberMe: {
        value: false
      }
    }
  )

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    let currentState = { ...formState }
    const childItems = form.getElementsByTagName('input');
    currentState.emailAddress.isInvalid = !childItems.emailAddress.checkValidity();
    currentState.password.isInvalid = !childItems.password.checkValidity();

    if (form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    }

    setFormState(currentState);
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.id;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    let currentState = { ...formState }
    currentState[name].value = value;
    setFormState(currentState);
  }

  const handleOnBlur = (event) => {
    const target = event.target;
    const name = target.id;
    let currentState = { ...formState }
    currentState[name].isInvalid = !target.checkValidity();
    setFormState(currentState);
  }

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs md="6" lg="4">
          <Card>
            <Card.Header>
              Login
            </Card.Header>
            <Card.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="emailAddress">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required isInvalid={formState.emailAddress.isInvalid} onChange={handleChange} onBlur={handleOnBlur} />
                  <Form.Control.Feedback type="invalid">
                    Email address is not correct. 
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required isInvalid={formState.password.isInvalid} onChange={handleChange} onBlur={handleOnBlur} />
                  <Form.Control.Feedback type="invalid">
                    Password is not valid.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="rememberMe">
                  <Form.Check type="checkbox" label="Remember me?" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
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
