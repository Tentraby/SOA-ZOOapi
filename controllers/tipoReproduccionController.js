const TipoReproduccion = require('../models/tipo_reproduccion');

// Obtener todos los tipos de reproducción
async function obtenerTiposReproduccion(req, res) {
  try {
    const tiposReproduccion = await TipoReproduccion.findAll();
    res.json(tiposReproduccion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los tipos de reproducción', error });
  }
}

// Crear un nuevo tipo de reproducción
async function crearTipoReproduccion(req, res) {
  const { nombre } = req.body;
  try {
    const tipoReproduccion = await TipoReproduccion.create({ nombre });
    res.status(201).json(tipoReproduccion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el tipo de reproducción', error });
  }
}

// Obtener un tipo de reproducción por su ID
async function obtenerTipoReproduccionPorId(req, res) {
  const { id } = req.params;
  try {
    const tipoReproduccion = await TipoReproduccion.findByPk(id);
    if (!tipoReproduccion) {
      return res.status(404).json({ mensaje: 'Tipo de reproducción no encontrado' });
    }
    res.json(tipoReproduccion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el tipo de reproducción', error });
  }
}

// Actualizar un tipo de reproducción por su ID
async function actualizarTipoReproduccion(req, res) {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const tipoReproduccion = await TipoReproduccion.findByPk(id);
    if (!tipoReproduccion) {
      return res.status(404).json({ mensaje: 'Tipo de reproducción no encontrado' });
    }
    tipoReproduccion.nombre = nombre;
    await tipoReproduccion.save();
    res.json(tipoReproduccion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el tipo de reproducción', error });
  }
}

// Eliminar un tipo de reproducción por su ID
async function eliminarTipoReproduccion(req, res) {
  const { id } = req.params;
  try {
    const tipoReproduccion = await TipoReproduccion.findByPk(id);
    if (!tipoReproduccion) {
      return res.status(404).json({ mensaje: 'Tipo de reproducción no encontrado' });
    }
    await tipoReproduccion.destroy();
    res.json({ mensaje: 'Tipo de reproducción eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el tipo de reproducción', error });
  }
}

module.exports = {
  obtenerTiposReproduccion,
  crearTipoReproduccion,
  obtenerTipoReproduccionPorId,
  actualizarTipoReproduccion,
  eliminarTipoReproduccion,
};
