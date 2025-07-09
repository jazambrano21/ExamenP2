export interface Usuario {
    id_usuario: number;
    nombres: string;
    apellidos: string;
    email: string;
    password: string;
    tipo_usuario: 'admin' | 'creador' | 'consumidor';
}