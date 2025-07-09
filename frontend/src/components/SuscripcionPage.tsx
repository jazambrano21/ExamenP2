import React, { useEffect, useState } from 'react';
import type { Suscripcion } from '../interfaces/Suscripcion';
import { suscribirCurso, cancelarSuscripcion, getAllSuscripciones } from '../services/suscripcionServices';
import SuscripcionList from './SuscripcionList';

const SuscripcionPage: React.FC = () => {
  const [suscripciones, setSuscripciones] = useState<Suscripcion[]>([]);
  const [id_usuario, setIdUsuario] = useState<number>(0);
  const [id_curso, setIdCurso] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const loadSuscripciones = async () => {
    const data = await getAllSuscripciones();
    setSuscripciones(data);
  };

  useEffect(() => {
    loadSuscripciones();
  }, []);

  const handleSuscribir = async () => {
    try {
      setError(null);
      await suscribirCurso(id_usuario, id_curso);
      await loadSuscripciones();
      setIdUsuario(0);
      setIdCurso(0);
    } catch (error: any) {
      setError(error.message || 'Error desconocido al suscribirse');
    }
  };

  const handleCancelar = async (id_usuario: number, id_curso: number) => {
    try {
      await cancelarSuscripcion(id_usuario, id_curso);
      await loadSuscripciones();
    } catch (error) {
      setError('Error al cancelar la suscripción');
    }
  };

  return (
    <div>
      <h2>Suscribirse a un Curso</h2>

      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          ⚠️ {error}
        </div>
      )}

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="usuario">ID del Usuario</label><br />
        <input
          id="usuario"
          type="number"
          value={id_usuario}
          onChange={(e) => setIdUsuario(Number(e.target.value))}
          placeholder="Ej: 1"
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="curso">ID del Curso</label><br />
        <input
          id="curso"
          type="number"
          value={id_curso}
          onChange={(e) => setIdCurso(Number(e.target.value))}
          placeholder="Ej: 2"
        />
      </div>

      <button onClick={handleSuscribir}>Suscribirse</button>

      <hr />

      <h2>Suscripciones</h2>
      <SuscripcionList suscripciones={suscripciones} onCancelar={handleCancelar} />
    </div>
  );
};

export default SuscripcionPage;
