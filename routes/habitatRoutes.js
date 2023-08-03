const express = require('express');
const router = express.Router();
const habitatController = require('../controllers/habitatController');

// Rutas para el recurso habitat
router.get('/habitat', habitatController.obtenerHabitats);
router.post('/habitat', habitatController.crearHabitat);
router.get('/habitat/:id', habitatController.obtenerHabitatPorId);
router.put('/habitat/:id', habitatController.actualizarHabitat);
router.delete('/habitat/:id', habitatController.eliminarHabitat);

module.exports = router;
