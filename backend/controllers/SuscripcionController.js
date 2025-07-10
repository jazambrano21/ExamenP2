const Suscripcion = require('../models/Suscripcion');
const pool = require('../config/db'); // ✅ IMPORTANTE


exports.suscribir = async (req, res) => {
    try {
        console.log('🔍 Datos recibidos:', req.body);
        const { id_usuario, id_curso } = req.body;

        if (!id_usuario || !id_curso) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }

        // 🔍 Validar existencia de usuario y curso
        const userExists = await pool.query('SELECT 1 FROM usuario WHERE id_usuario = $1', [id_usuario]);
        if (userExists.rowCount === 0) {
            return res.status(404).json({ error: 'El usuario no existe' });
        }

        const courseExists = await pool.query('SELECT 1 FROM curso WHERE id_curso = $1', [id_curso]);
        if (courseExists.rowCount === 0) {
            return res.status(404).json({ error: 'El curso no existe' });
        }

        const existing = await Suscripcion.get({ id_usuario, id_curso });
        if (existing) {
            return res.status(409).json({ error: 'Ya estás suscrito a este curso' });
        }

        const suscripcion = await Suscripcion.create({ id_usuario, id_curso });
        res.status(201).json(suscripcion);

    } catch (error) {
        console.error('❌ Error al suscribirse:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

exports.cancelar = async (req, res) => {
    try {
        await Suscripcion.delete(req.body);
        res.json({ message: 'Suscripción cancelada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllSuscripciones = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM suscripcion');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};