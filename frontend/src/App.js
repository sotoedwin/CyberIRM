import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './views/Profilepage'; 
import Login from './views/Login'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} /> 
          <Route
            path="/"
            element={
              <header className="App-header">
                <p>Bienvenido a CyberIRM</p>
                <a className="App-link" href="/profile">
                  Ir al perfil
                </a>
                <a className="App-link" href="/login">
                  Iniciar sesión
                </a>
              </header>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;