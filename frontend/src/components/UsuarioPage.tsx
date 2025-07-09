import React, { useEffect, useState } from 'react';
import type { Usuario } from '../interfaces/Usuario';
import { createUsuario, getAllUsuarios } from '../services/usuarioServices';
import UsuarioForm from './UsuarioForm';

const UsuarioPage: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [selectedUsuario, setSelectedUsuario] = useState<Partial<Usuario>>({});
    const [isEditing, setIsEditing] = useState(false);

    // Debes implementar un servicio para obtener todos los usuarios
    const loadUsuarios = async () => {
        // const data = await getAllUsuarios();
        // setUsuarios(data);
    };

    useEffect(() => {
        loadUsuarios();
    }, []);

    const handleCreate = async (usuario: Omit<Usuario, 'id_usuario'>) => {
        await createUsuario(usuario);
        loadUsuarios();
        setSelectedUsuario({});
        setIsEditing(false);
    };

    const handleEdit = (usuario: Usuario) => {
        setSelectedUsuario(usuario);
        setIsEditing(true);
    };

    return (
        <div>
            <h1>Gestión de Usuarios</h1>
            <UsuarioForm
                initialData={isEditing ? selectedUsuario : undefined}
                onSubmit={handleCreate}
            />
            {/* Aquí podrías agregar un UsuarioList si lo tienes */}
        </div>
    );
};

export default UsuarioPage;