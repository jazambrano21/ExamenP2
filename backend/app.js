const usuarioRoutes = require('./routes/UsuarioRoutes');
const cursoRoutes = require('./routes/CursoRoutes');
const suscripcionRoutes = require('./routes/SuscripcionRoutes');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/api', usuarioRoutes);
app.use('/api', cursoRoutes);
app.use('/api', suscripcionRoutes);

module.exports = app;