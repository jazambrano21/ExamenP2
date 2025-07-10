const app = require('./app.js');
const pool = require('./config/db');
const PORT = process.env.PORT || 3000;


pool.connect((err)=> {
    if (err) {
        console.error('Error en la base de Datos', err);
    } else {
        console.log('Conexión a la base de datos exitosa');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});