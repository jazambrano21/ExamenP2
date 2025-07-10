const pool = require('../config/db');

class Suscripcion {
    static async create({ id_usuario, id_curso }) {
        const result = await pool.query(
            `INSERT INTO suscripcion (id_usuario, id_curso) VALUES ($1, $2) RETURNING *`,
            [id_usuario, id_curso]
        );
        return result.rows[0];
    }

    static async delete({ id_usuario, id_curso }) {
        await pool.query(
            `DELETE FROM suscripcion WHERE id_usuario = $1 AND id_curso = $2`,
            [id_usuario, id_curso]
        );
    }

    static async get({ id_usuario, id_curso }) {
        const result = await pool.query(
            `SELECT * FROM suscripcion WHERE id_usuario = $1 AND id_curso = $2`,
            [id_usuario, id_curso]
        );
        return result.rows[0];
    }
}

module.exports = Suscripcion;