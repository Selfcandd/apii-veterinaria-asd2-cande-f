const Producto = require('../models/producto');

// Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
};

// Obtener un producto por código
exports.obtenerProductoPorCodigo = async (req, res) => {
  const producto = await Producto.findOne({ codigo: req.params.codigo });

  if (!producto) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' });
  }

  res.json(producto);
};

// Crear un producto nuevo
exports.crearProducto = async (req, res) => {
  const nuevoProducto = new Producto(req.body);
  await nuevoProducto.save();
  res.status(201).json(nuevoProducto);
};

// Actualizar un producto existente
exports.actualizarProducto = async (req, res) => {
  const productoActualizado = await Producto.findOneAndUpdate(
    { codigo: req.params.codigo },
    req.body,
    { new: true }
  );

  res.json(productoActualizado);
};

// Eliminar un producto por código
exports.eliminarProducto = async (req, res) => {
  await Producto.findOneAndDelete({ codigo: req.params.codigo });
  res.json({ mensaje: 'Producto eliminado correctamente' });
};

// Buscar productos por nombre
exports.buscarProductos = async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ mensaje: 'Debe enviar un texto de búsqueda' });
  }

  const productos = await Producto.find({
    nombre: { $regex: q, $options: 'i' }
  });

  res.json(productos);
};

// Obtener productos por categoría
exports.obtenerPorCategoria = async (req, res) => {
  const { nombre } = req.params;

  const productos = await Producto.find({
    categoria: nombre
  });

  res.json(productos);
};

// Obtener productos por rango de precio
exports.obtenerPorPrecio = async (req, res) => {
  const { min, max } = req.params;

  const productos = await Producto.find({
    precio: { $gte: Number(min), $lte: Number(max) }
  });

  res.json(productos);
};

// Carga masiva de productos
exports.cargaMasiva = async (req, res) => {
  const productos = req.body;

  if (!Array.isArray(productos)) {
    return res
      .status(400)
      .json({ mensaje: 'Se esperaba un arreglo de productos' });
  }

  await Producto.insertMany(productos);
  res.status(201).json({ mensaje: 'Productos cargados correctamente' });
};
