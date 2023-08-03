const Habitat = require('../models/habitat');

// Obtener todos los hábitats
async function obtenerHabitats(req, res) {
  try {
    const habitats = await Habitat.findAll();
    res.json(habitats);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los hábitats', error });
  }
}

// Crear un nuevo hábitat
async function crearHabitat(req, res) {
  const { nombre } = req.body;
  try {
    const habitat = await Habitat.create({ nombre });
    res.status(201).json(habitat);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el hábitat', error });
  }
}

// Obtener un hábitat por su ID
async function obtenerHabitatPorId(req, res) {
  const { id } = req.params;
  try {
    const habitat = await Habitat.findByPk(id);
    if (!habitat) {
      return res.status(404).json({ mensaje: 'Hábitat no encontrado' });
    }
    res.json(habitat);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el hábitat', error });
  }
}

// Actualizar un hábitat por su ID
async function actualizarHabitat(req, res) {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const habitat = await Habitat.findByPk(id);
    if (!habitat) {
      return res.status(404).json({ mensaje: 'Hábitat no encontrado' });
    }
    habitat.nombre = nombre;
    await habitat.save();
    res.json(habitat);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el hábitat', error });
  }
}

// Eliminar un hábitat por su ID
async function eliminarHabitat(req, res) {
  const { id } = req.params;
  try {
    const habitat = await Habitat.findByPk(id);
    if (!habitat) {
      return res.status(404).json({ mensaje: 'Hábitat no encontrado' });
    }
    await habitat.destroy();
    res.json({ mensaje: 'Hábitat eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el hábitat', error });
  }
}

module.exports = {
  obtenerHabitats,
  crearHabitat,
  obtenerHabitatPorId,
  actualizarHabitat,
  eliminarHabitat,
};
