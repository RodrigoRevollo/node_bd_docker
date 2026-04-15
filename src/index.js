const express = require('express');


// inicializando una aplicación de Express
const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Saludos desde mi App de Node (ultimo modificado)' });
});

// iniciando el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor correteando en el puerto 3000 (ultima modificación)');
});

