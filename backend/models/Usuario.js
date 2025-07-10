const pool = require('../config/db');

class Usuario {
    constructor({ id_usuario, nombres, apellidos, email, password, tipo_usuario }) {
        this.id_usuario = id_usuario;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.tipo_usuario = tipo_usuario;
    }

    static async create(data) {
        const { nombres, apellidos, email, password, tipo_usuario } = data;
        const result = await pool.query(
            `INSERT INTO usuario (nombres, apellidos, email, password, tipo_usuario)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [nombres, apellidos, email, password, tipo_usuario]
        );
        return new Usuario(result.rows[0]);
    }

    static async getById(id) {
        const result = await pool.query('SELECT * FROM usuario WHERE id_usuario = $1', [id]);
        return result.rows[0] ? new Usuario(result.rows[0]) : null;
    }
}

module.exports = Usuario;