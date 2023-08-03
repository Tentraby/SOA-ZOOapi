const Especie = require('../models/especie');

// Obtener todas las especies
async function obtenerEspecies(req, res) {
  try {
    const especies = await Especie.findAll();
    res.json(especies);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las especies', error });
  }
}

// Crear una nueva especie
async function crearEspecie(req, res) {
  const { nombre } = req.body;
  try {
    const especie = await Especie.create({ nombre });
    res.status(201).json(especie);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la especie', error });
  }
}

// Obtener una especie por su ID
async function obtenerEspeciePorId(req, res) {
  const { id } = req.params;
  try {
    const especie = await Especie.findByPk(id);
    if (!especie) {
      return res.status(404).json({ mensaje: 'Especie no encontrada' });
    }
    res.json(especie);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la especie', error });
  }
}

// Actualizar una especie por su ID
async function actualizarEspecie(req, res) {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const especie = await Especie.findByPk(id);
    if (!especie) {
      return res.status(404).json({ mensaje: 'Especie no encontrada' });
    }
    especie.nombre = nombre;
    await especie.save();
    res.json(especie);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la especie', error });
  }
}

// Eliminar una especie por su ID
async function eliminarEspecie(req, res) {
  const { id } = req.params;
  try {
    const especie = await Especie.findByPk(id);
    if (!especie) {
      return res.status(404).json({ mensaje: 'Especie no encontrada' });
    }
    await especie.destroy();
    res.json({ mensaje: 'Especie eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la especie', error });
  }
}

module.exports = {
  obtenerEspecies,
  crearEspecie,
  obtenerEspeciePorId,
  actualizarEspecie,
  eliminarEspecie,
};
