import React, { useState } from 'react';

interface Props {
    onSubmit: (id_usuario: number, id_curso: number) => void;
}

const SuscripcionForm: React.FC<Props> = ({ onSubmit }) => {
    const [id_usuario, setIdUsuario] = useState(0);
    const [id_curso, setIdCurso] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(id_usuario, id_curso);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="ID Usuario"
                value={id_usuario}
                onChange={e => setIdUsuario(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="ID Curso"
                value={id_curso}
                onChange={e => setIdCurso(Number(e.target.value))}
            />
            <button type="submit">Suscribirse</button>
        </form>
    );
};

export default SuscripcionForm;