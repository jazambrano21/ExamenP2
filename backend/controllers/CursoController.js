const Curso = require('../models/Curso');
const pool = require('../config/db');


exports.createCurso = async (req, res) => {
    try {
        const curso = await Curso.create(req.body);
        res.status(201).json(curso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCursos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM curso');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEstado = async (req, res) => {
    try {
        const curso = await Curso.updateEstado(req.params.id, req.body.estado);
        if (!curso) return res.status(404).json({ message: 'Curso no encontrado' });
        res.json(curso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};