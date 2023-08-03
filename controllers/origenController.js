const Origen = require('../models/origen');

// Obtener todos los orígenes
async function obtenerOrigenes(req, res) {
  try {
    const origenes = await Origen.findAll();
    res.json(origenes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los orígenes', error });
  }
}

// Crear un nuevo origen
async function crearOrigen(req, res) {
  const { nombre } = req.body;
  try {
    const origen = await Origen.create({ nombre });
    res.status(201).json(origen);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el origen', error });
  }
}

// Obtener un origen por su ID
async function obtenerOrigenPorId(req, res) {
  const { id } = req.params;
  try {
    const origen = await Origen.findByPk(id);
    if (!origen) {
      return res.status(404).json({ mensaje: 'Origen no encontrado' });
    }
    res.json(origen);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el origen', error });
  }
}

// Actualizar un origen por su ID
async function actualizarOrigen(req, res) {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const origen = await Origen.findByPk(id);
    if (!origen) {
      return res.status(404).json({ mensaje: 'Origen no encontrado' });
    }
    origen.nombre = nombre;
    await origen.save();
    res.json(origen);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el origen', error });
  }
}

// Eliminar un origen por su ID
async function eliminarOrigen(req, res) {
  const { id } = req.params;
  try {
    const origen = await Origen.findByPk(id);
    if (!origen) {
      return res.status(404).json({ mensaje: 'Origen no encontrado' });
    }
    await origen.destroy();
    res.json({ mensaje: 'Origen eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el origen', error });
  }
}

module.exports = {
  obtenerOrigenes,
  crearOrigen,
  obtenerOrigenPorId,
  actualizarOrigen,
  eliminarOrigen,
};
