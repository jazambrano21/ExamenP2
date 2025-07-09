// src/components/InicioPage.tsx

import React from 'react';

const InicioPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bienvenido al Sistema de Gestión de Cursos</h1>
      <p>Usa el menú superior para navegar entre las secciones:</p>
      <ul>
        <li>📚 Cursos</li>
        <li>👤 Usuarios</li>
        <li>📝 Suscripciones</li>
        <li>🔐 Login / Cerrar sesión</li>
      </ul>
    </div>
  );
};

export default InicioPage;
