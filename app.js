const express = require('express');
const app = express();
const * as dotenv from 'dotenv';
const animalRoutes = require('./routes/animalRoutes');
const alimentacionRoutes = require('./routes/alimentacionRoutes');
const especieRoutes = require('./routes/especieRoutes');
const habitatRoutes = require('./routes/habitatRoutes');
const origenRoutes = require('./routes/origenRoutes');

const PORT = process.env.PORT || 3000;

// Rutas de la API
app.use(animalRoutes);
app.use(alimentacionRoutes);
app.use(especieRoutes);
app.use(habitatRoutes);
app.use(origenRoutes);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express!'); // Aquí puedes poner tu mensaje personalizado
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('Servidor iniciado en el puerto ${PORT}');
});
