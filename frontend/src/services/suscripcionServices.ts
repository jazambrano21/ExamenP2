import type { Suscripcion } from '../interfaces/Suscripcion';

const API_URL = 'http://localhost:3000/api/suscripciones';

export const suscribirCurso = async (id_usuario: number, id_curso: number): Promise<Suscripcion> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_usuario, id_curso }),
    });
    if (!response.ok) throw new Error('Error al suscribirse al curso');
    return await response.json();
};

export const cancelarSuscripcion = async (id_usuario: number, id_curso: number): Promise<void> => {
    const response = await fetch(API_URL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_usuario, id_curso }),
    });
    if (!response.ok) throw new Error('Error al cancelar suscripción');
};

export const getAllSuscripciones = async (): Promise<Suscripcion[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al obtener suscripciones');
    return await response.json();
};