import React from "react";
import LoginForm from "../components/Loginform";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    console.log(credentials); // Añade este log para verificar qué datos estás enviando
    try {
      const response = await api.post("/api/token/", credentials);
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      navigate("/profile");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response?.data); // Muestra la respuesta de error
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
