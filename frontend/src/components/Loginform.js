import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={credentials.username}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
