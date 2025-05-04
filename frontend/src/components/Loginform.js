import React, { useState } from "react";
import { LoginContainer, LoginFormWrapper, Input, Button, Title } from "../styles/Loginformstyle";

const LoginForm = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <LoginContainer>
      <LoginFormWrapper>
        <Title>Iniciar sesión</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Usuario"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Iniciar sesión</Button>
        </form>
      </LoginFormWrapper>
    </LoginContainer>
  );
};

export default LoginForm;
