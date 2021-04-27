import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function Register() {
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
      confirmPassword: {
        value: '',
        isInvalid: false
      },
      name: {
        value: '',
        isInvalid: false
      }
    }
  )

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    let currentFormState = { ...formState };
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    currentFormState.emailAddress.isInvalid = false;
    if (currentFormState.emailAddress.value.length === 0 || !isValidEmailAddress(currentFormState.emailAddress.value)){
      currentFormState.emailAddress.isInvalid = true;
    }

    currentFormState.name.isInvalid = false;
    if (currentFormState.name.value.length === 0){
      currentFormState.name.isInvalid = true;
    }

    currentFormState.password.isInvalid = false;
    if (currentFormState.password.value.length < 6 || !isValidPassword(currentFormState.password.value)){
      currentFormState.password.isInvalid = true;
    }

    currentFormState.confirmPassword.isInvalid = true;
    if (currentFormState.password.value === currentFormState.confirmPassword.value){
      currentFormState.confirmPassword.isInvalid = true;
    }

    if (currentFormState.emailAddress.isInvalid || currentFormState.password.isInvalid || currentFormState.confirmPassword.isInvalid){
      event.preventDefault();
      event.stopPropagation();
    }

    setFormState(currentFormState);
  };

  const isValidEmailAddress = (emailAddress) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress)){
      return true;
    } 
    else{
      return false;
    }
  }

  const isValidPassword = (password) => {
    return false;
  }

  const handleChange = (event) => {
    let target = event.target;
    let name = target.id;
    let value = target.value;
    let currentState = { ...formState }
    currentState[name].value = value;
    setFormState(currentState);
  }

  return (
    <Container fluent>
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Card>
            <Card.Header>
              Login
            </Card.Header>
            <Card.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="emailAddress">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required isInvalid={formState.emailAddress.isInvalid} onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please add a valid email address
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required isInvalid={formState.name.isInvalid} onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please choose an user name
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required isInvalid={formState.password.isInvalid} onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please add a valid email address
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required isInvalid={formState.confirmPassword.isInvalid} onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please make sure passwords match
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
