import { Form, Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { LOGIN_VALUES, URL_USERS } from "../../constants";
import { UserContext } from "../../context/UserContext";
import { validationLogin } from "../../helpers/Validations";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

export const FormContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginFormulary = () => {
  const { login, auth } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  }, [auth]);
  const { handleKeyUp, handleSubmit, values, errors } = useForm(
    LOGIN_VALUES,
    login,
    validationLogin
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onKeyUp={handleKeyUp}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onKeyUp={handleKeyUp} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
      {" "}
        Ingresar
      </Button>
      {Object.keys(errors).length === 0
        ? null
        : Object.values(errors).map((error, index) => (
            <Alert key={index} variant="danger">
              {error}
            </Alert>
          ))}
    </Form>
  );
};

export default LoginFormulary;
