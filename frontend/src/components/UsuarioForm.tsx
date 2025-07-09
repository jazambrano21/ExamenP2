import React, { useState, useEffect } from 'react';
import type { Usuario } from '../interfaces/Usuario';

interface Props {
    initialData?: Partial<Usuario>;
    onSubmit: (usuario: Omit<Usuario, 'id_usuario'>) => Promise<void>;
}

const UsuarioForm: React.FC<Props> = ({ initialData = {}, onSubmit }) => {
    const [form, setForm] = useState<Omit<Usuario, 'id_usuario'>>({
        nombres: initialData.nombres || '',
        apellidos: initialData.apellidos || '',
        email: initialData.email || '',
        password: initialData.password || '',
        tipo_usuario: initialData.tipo_usuario || 'consumidor',
    });
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (initialData && Object.keys(initialData).length > 0) {
            setForm({
                nombres: initialData.nombres || '',
                apellidos: initialData.apellidos || '',
                email: initialData.email || '',
                password: initialData.password || '',
                tipo_usuario: initialData.tipo_usuario || 'consumidor',
            });
        }
    }, [initialData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmit(form);
        setMensaje('¡Usuario registrado exitosamente!');
        setForm({
            nombres: '',
            apellidos: '',
            email: '',
            password: '',
            tipo_usuario: 'consumidor',
        });
        setTimeout(() => setMensaje(''), 2500);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombres"
                value={form.nombres}
                onChange={e => setForm({ ...form, nombres: e.target.value })}
            />
            <input
                type="text"
                placeholder="Apellidos"
                value={form.apellidos}
                onChange={e => setForm({ ...form, apellidos: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <select
                value={form.tipo_usuario}
                onChange={e => setForm({ ...form, tipo_usuario: e.target.value as Usuario['tipo_usuario'] })}
            >
                <option value="admin">Administrador</option>
                <option value="creador">Creador</option>
                <option value="consumidor">Consumidor</option>
            </select>
            <button type="submit">Registrar</button>
            {mensaje && <span style={{ marginLeft: 16, color: 'lightgreen', fontWeight: 'bold' }}>{mensaje}</span>}
        </form>
    );
};

export default UsuarioForm;