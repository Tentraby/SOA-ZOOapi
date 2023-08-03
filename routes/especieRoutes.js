const express = require('express');
const router = express.Router();
const especieController = require('../controllers/especieController');
const animalController = require('../controllers/animalController')

// Rutas para el recurso especie
router.get('/especie', especieController.obtenerEspecies);
router.post('/especie', especieController.crearEspecie);
router.get('/especie/:id', especieController.obtenerEspeciePorId);
router.put('/especie/:id', especieController.actualizarEspecie);
router.delete('/especie/:id', especieController.eliminarEspecie);

router.get('/especie/animal/:especieId', animalController.getAnimalsByEspecieId);


module.exports = router;
