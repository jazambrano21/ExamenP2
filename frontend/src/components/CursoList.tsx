import React from 'react';
import type { Curso } from '../interfaces/Curso';

interface Props {
  cursos: Curso[];
  onEdit: (curso: Curso) => void;
  onDelete?: (id: number) => void; // si en algún momento quieres eliminar
  onChangeEstado?: (id: number, estado: Curso['estado']) => void;
}

const CursoList: React.FC<Props> = ({ cursos, onEdit, onDelete, onChangeEstado }) => {
  return (
    <div>
      <h2>Lista de Cursos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>ID Creador</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id_curso}>
              <td>{curso.id_curso}</td>
              <td>{curso.nombre}</td>
              <td>{curso.descripcion}</td>
              <td>
                {onChangeEstado ? (
                  <select
                    value={curso.estado}
                    onChange={(e) =>
                      onChangeEstado(curso.id_curso, e.target.value as Curso['estado'])
                    }
                  >
                    <option value="en_construccion">En construcción</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                ) : (
                  curso.estado
                )}
              </td>
              <td>{curso.id_creador}</td>
              <td>
                <button onClick={() => onEdit(curso)}>Editar</button>
                {onDelete && (
                  <button onClick={() => onDelete(curso.id_curso)}>Eliminar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CursoList;