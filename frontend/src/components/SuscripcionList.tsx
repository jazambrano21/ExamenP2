import React from 'react';
import type { Suscripcion } from '../interfaces/Suscripcion';

interface Props {
    suscripciones: Suscripcion[];
    onCancelar: (id_usuario: number, id_curso: number) => void;
}

const SuscripcionList: React.FC<Props> = ({ suscripciones, onCancelar }) => (
    <div>
        <h2>Suscripciones</h2>
        <table>
            <thead>
                <tr>
                    <th>ID Suscripción</th>
                    <th>ID Usuario</th>
                    <th>ID Curso</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {suscripciones.map(s => (
                    <tr key={s.id_suscripcion}>
                        <td>{s.id_suscripcion}</td>
                        <td>{s.id_usuario}</td>
                        <td>{s.id_curso}</td>
                        <td>{s.fecha}</td>
                        <td>
                            <button onClick={() => onCancelar(s.id_usuario, s.id_curso)}>
                                Cancelar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default SuscripcionList;