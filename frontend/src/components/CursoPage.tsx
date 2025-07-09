import React, { useEffect, useState } from 'react';
import type { Curso } from '../interfaces/Curso';
import { getAllCursos, createCurso, updateEstadoCurso } from '../services/cursoServices';
import CursoForm from './CursoForm';
import CursoList from './CursoList';

const CursoPage: React.FC = () => {
    const [cursos, setCursos] = useState<Curso[]>([]);
    const [selectedCurso, setSelectedCurso] = useState<Partial<Curso>>({});
    const [isEditing, setIsEditing] = useState(false);

    const loadCursos = async () => {
        const data = await getAllCursos();
        setCursos(data);
    };

    useEffect(() => {
        loadCursos();
    }, []);

    const handleCreate = async (curso: Omit<Curso, 'id_curso'>) => {
        await createCurso(curso);
        loadCursos();
        setSelectedCurso({});
        setIsEditing(false);
    };

    const handleEdit = (curso: Curso) => {
        setSelectedCurso(curso);
        setIsEditing(true);
    };

    const handleChangeEstado = async (id: number, estado: Curso['estado']) => {
        await updateEstadoCurso(id, estado);
        loadCursos();
    };

    return (
        <div>
            <h1>Gestión de Cursos</h1>
            <CursoForm
                initialData={isEditing ? selectedCurso : undefined}
                onSubmit={handleCreate}
            />
            <CursoList
                cursos={cursos}
                onEdit={handleEdit}
                onChangeEstado={handleChangeEstado}
            />
        </div>
    );
};

export default CursoPage;