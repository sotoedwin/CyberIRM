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
              <div className="landing-page">
                <header className="main-header">
                  <nav className="nav-container">
                    <div className="logo">CyberIRM</div>
                    <div className="nav-links">
                      <a href="/login" className="login-btn">Iniciar sesión</a>
                      <a href="/profile" className="profile-btn">Mi perfil</a>
                    </div>
                  </nav>
                  
                  <div className="hero-section">
                    <h1>Gestión inteligente de incidentes de ciberseguridad para PYMEs</h1>
                    <p className="subtitle">Protege tu negocio con una solución centralizada, eficiente y accesible</p>
                    <div className="cta-buttons">
                      <a href="/login" className="cta-primary">Comenzar ahora</a>
                      <a href="#beneficios" className="cta-secondary">Conoce más</a>
                    </div>
                  </div>
                </header>
                
                <section className="problem-solution">
                  <h2>Enfrentando los desafíos de ciberseguridad</h2>
                  <div className="challenges-container">
                    <div className="challenge-item">
                      <h3>Procesos fragmentados</h3>
                      <p>Las PYMEs gestionan incidentes mediante correos o hojas de cálculo, generando ineficiencias.</p>
                    </div>
                    <div className="challenge-item">
                      <h3>Recursos limitados</h3>
                      <p>A diferencia de grandes corporaciones, las PYMEs carecen de equipos dedicados y presupuestos extensos.</p>
                    </div>
                    <div className="challenge-item">
                      <h3>Vulnerabilidad creciente</h3>
                      <p>El 43% de los ciberataques están dirigidos a pequeñas empresas, pero solo el 14% está preparado.</p>
                    </div>
                  </div>
                </section>
                
                <section className="features">
                  <h2>Nuestra solución integral</h2>
                  <div className="features-container">
                    <div className="feature-card">
                      <div className="feature-icon">🔄</div>
                      <h3>Sistema centralizado</h3>
                      <p>Registra, rastrea y actualiza incidentes desde una única plataforma, eliminando canales informales.</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">⚡</div>
                      <h3>Procesos automatizados</h3>
                      <p>Asignación automática de responsables, notificaciones en tiempo real y flujos de trabajo predefinidos.</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">📊</div>
                      <h3>Análisis avanzado</h3>
                      <p>Métricas y reportes personalizados para identificar tendencias y tomar decisiones basadas en datos.</p>
                    </div>
                  </div>
                </section>
                
                <section id="beneficios" className="benefits">
                  <h2>Beneficios para tu empresa</h2>
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <h3>Optimización operativa</h3>
                      <ul>
                        <li>Reducción del tiempo de respuesta</li>
                        <li>Eliminación de tareas manuales repetitivas</li>
                        <li>Procesos estandarizados adaptados a PYMEs</li>
                      </ul>
                    </div>
                    <div className="benefit-item">
                      <h3>Protección del negocio</h3>
                      <ul>
                        <li>Minimización del impacto financiero</li>
                        <li>Protección efectiva de datos sensibles</li>
                        <li>Continuidad de operaciones durante incidentes</li>
                      </ul>
                    </div>
                    <div className="benefit-item">
                      <h3>Cumplimiento normativo</h3>
                      <ul>
                        <li>Alineación con regulaciones vigentes</li>
                        <li>Documentación automatizada para auditorías</li>
                        <li>Evidencia trazable de cada incidente</li>
                      </ul>
                    </div>
                    <div className="benefit-item">
                      <h3>Desarrollo de capacidades</h3>
                      <ul>
                        <li>Transformación de equipos reactivos en proactivos</li>
                        <li>Democratización del conocimiento</li>
                        <li>Fortalecimiento de la cultura de seguridad</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                <section className="impact">
                  <h2>Impacto en el sector PYME</h2>
                  <p className="impact-text">
                    Al fortalecer la postura de seguridad de las PYMEs, contribuimos a proteger el tejido empresarial 
                    que representa más del 90% del sector productivo, salvaguardando empleos y fomentando 
                    una transformación digital segura para construir un ecosistema digital más resiliente y confiable.
                  </p>
                </section>
                
                <footer className="main-footer">
                  <div className="footer-cta">
                    <h3>¿Listo para proteger tu negocio?</h3>
                    <a href="#" className="footer-btn">Contáctanos hoy</a>
                  </div>
                  <div className="footer-info">
                    <p>© 2025 CyberIRM - Todos los derechos reservados</p>
                  </div>
                </footer>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;