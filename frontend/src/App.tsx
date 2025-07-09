import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CursoPage from './components/CursoPage';
import UsuarioPage from './components/UsuarioPage';
import SuscripcionPage from './components/SuscripcionPage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import InicioPage from './components/InicioPage';


function App() {
  const [usuario, setUsuario] = useState<string | null>(null);

  useEffect(() => {
    const sesion = localStorage.getItem("usuarioLogueado");
    setUsuario(sesion);
  }, []);

  const handleLogin = (email: string, password: string) => {
    localStorage.setItem("usuarioLogueado", email);
    setUsuario(email);
    window.location.href = "/cursos";
  };

  return (
    <Router>
      <Navbar />

      {usuario && (
        <p style={{ margin: '10px', color: 'lightgreen' }}>
          ✅ Sesión iniciada como: <strong>{usuario}</strong>
        </p>
      )}

      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        <Route path="/usuarios" element={<UsuarioPage />} />
        <Route path="/cursos" element={<CursoPage />} />
        <Route path="/suscripciones" element={<SuscripcionPage />} />
        <Route path="*" element={<CursoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
