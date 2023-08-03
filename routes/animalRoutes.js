const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Rutas para el recurso animal
router.get('/animal', animalController.getAllAnimals);
router.get('/animal/:id', animalController.getAnimalById);
router.post('/animal', animalController.createAnimal);
router.put('/animal/:id', animalController.updateAnimalById);
router.delete('/animal/:id', animalController.deleteAnimalById);


module.exports = router;
