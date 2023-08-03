const Riesgo = require('../models/riesgo');

// Obtener todos los riesgos
async function obtenerRiesgos(req, res) {
  try {
    const riesgos = await Riesgo.findAll();
    res.json(riesgos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los riesgos', error });
  }
}

// Crear un nuevo riesgo
async function crearRiesgo(req, res) {
  const { nombre, descripcion } = req.body;
  try {
    const riesgo = await Riesgo.create({ nombre, descripcion });
    res.status(201).json(riesgo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el riesgo', error });
  }
}

// Otener un riesgo por su ID
async function obtenerRiesgoPorId(req, res) {
  const { id } = req.params;
  try {
    const riesgo = await Riesgo.findByPk(id);
    if (!riesgo) {
      return res.status(404).json({ mensaje: 'Riesgo no encontrado' });
    }
    res.json(riesgo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el riesgo', error });
  }
}

// Actualizar un riesgo por su ID
async function actualizarRiesgo(req, res) {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const riesgo = await Riesgo.findByPk(id);
    if (!riesgo) {
      return res.status(404).json({ mensaje: 'Riesgo no encontrado' });
    }
    riesgo.nombre = nombre;
    riesgo.descripcion = descripcion;
    await riesgo.save();
    res.json(riesgo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el riesgo', error });
  }
}

// Eliminar un riesgo por su ID
async function eliminarRiesgo(req, res) {
  const { id } = req.params;
  try {
    const riesgo = await Riesgo.findByPk(id);
    if (!riesgo) {
      return res.status(404).json({ mensaje: 'Riesgo no encontrado' });
    }
    await riesgo.destroy();
    res.json({ mensaje: 'Riesgo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el riesgo', error });
  }
}

module.exports = {
  obtenerRiesgos,
  crearRiesgo,
  obtenerRiesgoPorId,
  actualizarRiesgo,
  eliminarRiesgo,
};
