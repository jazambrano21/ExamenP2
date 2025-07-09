import type { Curso } from '../interfaces/Curso';

const API_URL = 'http://localhost:3000/api/cursos';

export const createCurso = async (curso: Omit<Curso, 'id_curso'>): Promise<Curso> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(curso),
    });
    if (!response.ok) throw new Error('Error al crear curso');
    return await response.json();
};

export const getAllCursos = async (): Promise<Curso[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al obtener cursos');
    return await response.json();
};

export const updateEstadoCurso = async (id: number, estado: string): Promise<Curso> => {
    const response = await fetch(`${API_URL}/${id}/estado`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado }),
    });
    if (!response.ok) throw new Error('Error al cambiar estado del curso');
    return await response.json();
};