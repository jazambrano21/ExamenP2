import React, { useState } from 'react';
import type { Curso } from '../interfaces/Curso';

interface Props {
    initialData?: Partial<Curso>;
    onSubmit: (curso: Omit<Curso, 'id_curso'>) => void;
}

const CursoForm: React.FC<Props> = ({ initialData = {}, onSubmit }) => {
    const [form, setForm] = useState<Omit<Curso, 'id_curso'>>({
        nombre: initialData.nombre || '',
        descripcion: initialData.descripcion || '',
        estado: initialData.estado || 'en_construccion',
        id_creador: initialData.id_creador || 0,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={form.nombre}
                onChange={e => setForm({ ...form, nombre: e.target.value })}
            />
            <textarea
                placeholder="Descripción"
                value={form.descripcion}
                onChange={e => setForm({ ...form, descripcion: e.target.value })}
            />
            <select
                value={form.estado}
                onChange={e => setForm({ ...form, estado: e.target.value as Curso['estado'] })}
            >
                <option value="en_construccion">En construcción</option>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
            </select>
            <input
                type="number"
                placeholder="ID Creador"
                value={form.id_creador}
                onChange={e => setForm({ ...form, id_creador: Number(e.target.value) })}
            />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default CursoForm;