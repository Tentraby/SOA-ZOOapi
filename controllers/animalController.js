const Animal = require('../models/animal');
const Riesgo = require('../models/riesgo');
const TipoReproduccion = require('../models/tipoReproduccion');
const Alimentacion = require('../models/alimentacion');
const Especie = require('../models/especie');
const Habitat = require('../models/habitat');
const Origen = require('../models/origen');

// Obtener todos los animales
async function getAllAnimals(req, res) {
  try {
    const animals = await Animal.findAll({
      include: [
        { model: Riesgo },
        { model: TipoReproduccion },
        { model: Alimentacion },
        { model: Especie },
        { model: Habitat },
        { model: Origen },
      ],
    });
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los animales', error });
  }
}

// Obtener un animal por su ID
async function getAnimalById(req, res) {
  const animalId = req.params.id;
  try {
    const animal = await Animal.findByPk(animalId, {
      include: [
        { model: Riesgo },
        { model: TipoReproduccion },
        { model: Alimentacion },
        { model: Especie },
        { model: Habitat },
        { model: Origen },
      ],
    });
    if (!animal) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }
    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el animal', error });
  }
}

async function getAnimalsByEspecieId(req, res) {
    const especieId = req.params.especieId;
    try {
        const animals = await Animal.findAll({
          where: { especieId }, 
        });
        res.status(200).json(animals);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener los animales por especie', error });
      }
  }

// Crear un nuevo animal
async function createAnimal(req, res) {
  const {
    nombre,
    scientific_name,
    tamanio,
    descripcion,
    link_video,
    link_map,
    link_audio,
    link_gif,
    createdAt,
    updatedAt,
    riesgo_id,
    tipo_reproduccion_id,
    alimentacion_id,
    especie_id,
    habitat_id,
    origen_id,
  } = req.body;
  try {
    const animal = await Animal.create({
      nombre,
      scientific_name,
      tamanio,
      descripcion,
      link_video,
      link_map,
      link_audio,
      link_gif,
      createdAt,
      updatedAt,
      riesgo_id,
      tipo_reproduccion_id,
      alimentacion_id,
      especie_id,
      habitat_id,
      origen_id,
    });
    res.status(201).json(animal);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el animal', error });
  }
}

// Actualizar un animal por su ID
async function updateAnimalById(req, res) {
  const animalId = req.params.id;
  const {
    nombre,
    scientific_name,
    tamanio,
    descripcion,
    link_video,
    link_map,
    link_audio,
    link_gif,
    createdAt,
    updatedAt,
    riesgo_id,
    tipo_reproduccion_id,
    alimentacion_id,
    especie_id,
    habitat_id,
    origen_id,
  } = req.body;
  try {
    const animal = await Animal.findByPk(animalId);
    if (!animal) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }
    await animal.update({
      nombre,
      scientific_name,
      tamanio,
      descripcion,
      link_video,
      link_map,
      link_audio,
      link_gif,
      createdAt,
      updatedAt,
      riesgo_id,
      tipo_reproduccion_id,
      alimentacion_id,
      especie_id,
      habitat_id,
      origen_id,
    });
    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el animal', error });
  }
}

// Eliminar un animal por su ID
async function deleteAnimalById(req, res) {
  const animalId = req.params.id;
  try {
    const animal = await Animal.findByPk(animalId);
    if (!animal) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }
    await animal.destroy();
    res.status(200).json({ message: 'Animal eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el animal', error });
  }
}

module.exports = {
  getAllAnimals,
  getAnimalById,
  getAnimalsByEspecieId,
  createAnimal,
  updateAnimalById,
  deleteAnimalById,
};
