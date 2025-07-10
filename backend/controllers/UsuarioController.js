const Usuario = require('../models/Usuario');

exports.createUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllUsuarios = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuario');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};