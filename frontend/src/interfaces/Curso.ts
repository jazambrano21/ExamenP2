export interface Curso {
    id_curso: number;
    nombre: string;
    descripcion: string;
    estado: 'en_construccion' | 'activo' | 'inactivo';
    id_creador: number;
}