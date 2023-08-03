const Alimentacion = require('../models/alimentacion');

// Obtener todas las alimentaciones
async function obtenerAlimentaciones(req, res) {
  try {
    const alimentaciones = await Alimentacion.findAll();
    res.json(alimentaciones);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las alimentaciones', error });
  }
}

// Crear una nueva alimentación
async function crearAlimentacion(req, res) {
  const { nombre } = req.body;
  try {
    const alimentacion = await Alimentacion.create({ nombre });
    res.status(201).json(alimentacion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la alimentación', error });
  }
}

// Obtener una alimentación por su ID
async function obtenerAlimentacionPorId(req, res) {
  const { id } = req.params;
  try {
    const alimentacion = await Alimentacion.findByPk(id);
    if (!alimentacion) {
      return res.status(404).json({ mensaje: 'Alimentación no encontrada' });
    }
    res.json(alimentacion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la alimentación', error });
  }
}

// Actualizar una alimentación por su ID
async function actualizarAlimentacion(req, res) {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const alimentacion = await Alimentacion.findByPk(id);
    if (!alimentacion) {
      return res.status(404).json({ mensaje: 'Alimentación no encontrada' });
    }
    alimentacion.nombre = nombre;
    await alimentacion.save();
    res.json(alimentacion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la alimentación', error });
  }
}

// Eliminar una alimentación por su ID
async function eliminarAlimentacion(req, res) {
  const { id } = req.params;
  try {
    const alimentacion = await Alimentacion.findByPk(id);
    if (!alimentacion) {
      return res.status(404).json({ mensaje: 'Alimentación no encontrada' });
    }
    await alimentacion.destroy();
    res.json({ mensaje: 'Alimentación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la alimentación', error });
  }
}

module.exports = {
  obtenerAlimentaciones,
  crearAlimentacion,
  obtenerAlimentacionPorId,
  actualizarAlimentacion,
  eliminarAlimentacion,
};
