const pool = require('../config/db');

class Curso {
    constructor({ id_curso, nombre, descripcion, estado, id_creador }) {
        this.id_curso = id_curso;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.estado = estado;
        this.id_creador = id_creador;
    }

    static async create(data) {
        const { nombre, descripcion, estado, id_creador } = data;
        const result = await pool.query(
            `INSERT INTO curso (nombre, descripcion, estado, id_creador)
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [nombre, descripcion, estado, id_creador]
        );
        return new Curso(result.rows[0]);
    }

    static async getById(id) {
        const result = await pool.query('SELECT * FROM curso WHERE id_curso = $1', [id]);
        return result.rows[0] ? new Curso(result.rows[0]) : null;
    }

    static async updateEstado(id, estado) {
        const result = await pool.query(
            `UPDATE curso SET estado = $1 WHERE id_curso = $2 RETURNING *`,
            [estado, id]
        );
        return result.rows[0] ? new Curso(result.rows[0]) : null;
    }
}

module.exports = Curso;