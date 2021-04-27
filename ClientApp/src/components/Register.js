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
    let isFormValid = true;
    
    currentFormState.emailAddress.isInvalid = false;
    if (currentFormState.emailAddress.value.length === 0 || !isValidEmailAddress(currentFormState.emailAddress.value)){
      currentFormState.emailAddress.isInvalid = true;
      isFormValid = false;
    }

    currentFormState.name.isInvalid = false;
    if (currentFormState.name.value.length === 0){
      currentFormState.name.isInvalid = true;
      isFormValid = false;
    }

    currentFormState.password.isInvalid = false;
    if (!isValidPassword(currentFormState.password.value)){
      currentFormState.password.isInvalid = true;
      isFormValid = false;
    }

    currentFormState.confirmPassword.isInvalid = true;
    if (currentFormState.password.value === currentFormState.confirmPassword.value){
      currentFormState.confirmPassword.isInvalid = true;
      isFormValid = false;
    }

    if (!isFormValid && form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    }

    setFormState(currentFormState);
  };

  const isValidEmailAddress = (emailAddress) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress)){
      return true;
    } 
    return false;
  }

  const isValidPassword = (password) => {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=[^a-zA-Z0-9]*).{6,20}$/.test(password)){
      return true;
    }
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

  const handleEmailValidation = (event) => {
    let currentState = { ...formState }
    currentState.emailAddress.isInvalid = false;
    if (currentState.emailAddress.value.length === 0 || !isValidEmailAddress(currentState.emailAddress.value)){
      currentState.emailAddress.isInvalid = true;
    }
    setFormState(currentState);
  }

  const handleNameValidation = (event) => {
    let currentState = { ...formState }
    currentState.name.isInvalid = false;
    if (currentState.name.value.length === 0){
      currentState.name.isInvalid = true;
    }
    setFormState(currentState);
  }

  const handlePasswordValidation = (event) => {
    let currentState = { ...formState }
    currentState.password.isInvalid = false;
    if (!isValidPassword(currentState.password.value)){
      currentState.password.isInvalid = true;
    }

    currentState.confirmPassword.isInvalid = true;
    if (currentState.password.value === currentState.confirmPassword.value){
      currentState.confirmPassword.isInvalid = true;
    }
    setFormState(currentState);
  }

  return (
    <Container fluent>
      <Row className="justify-content-md-center">
        <Col xs md="6">
          <Card>
            <Card.Header>
              Register
            </Card.Header>
            <Card.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="emailAddress">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required isInvalid={formState.emailAddress.isInvalid} onChange={handleChange} onBlur={handleEmailValidation} />
                  <Form.Control.Feedback type="invalid">
                    Email address is not correct. 
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required isInvalid={formState.name.isInvalid} onChange={handleChange} onBlur={handleNameValidation} />
                  <Form.Control.Feedback type="invalid">
                    Name can't be empty
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required isInvalid={formState.password.isInvalid} onChange={handleChange} onBlur={handlePasswordValidation} />
                  <Form.Control.Feedback type="invalid">
                    Password is not valid. It should have 6 to 20 characters, and at least one number, one lower case and one upper case character.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required isInvalid={formState.confirmPassword.isInvalid} onChange={handleChange} onBlur={handlePasswordValidation} />
                  <Form.Control.Feedback type="invalid">
                    Password doesn't match
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
