const express = require('express');
const router = express.Router();
const origenController = require('../controllers/origenController');

// Rutas para el recurso origen
router.get('/origen', origenController.obtenerOrigenes);
router.post('/origen', origenController.crearOrigen);
router.get('/origen/:id', origenController.obtenerOrigenPorId);
router.put('/origen/:id', origenController.actualizarOrigen);
router.delete('/origen/:id', origenController.eliminarOrigen);

module.exports = router;
