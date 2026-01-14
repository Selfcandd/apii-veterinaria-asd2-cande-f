require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Producto = require('./models/producto');

const cargarProductos = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB');

    const rutaArchivo = path.join(__dirname, 'data', 'productos.json');
    const data = JSON.parse(fs.readFileSync(rutaArchivo, 'utf-8'));

    const cantidad = await Producto.countDocuments();
    if (cantidad > 0) {
      console.log('La base ya tiene productos. No se cargó nada.');
      process.exit();
    }

    await Producto.insertMany(data);
    console.log('Productos cargados correctamente');

    process.exit();
  } catch (error) {
    console.error('Error al cargar productos:', error);
    process.exit(1);
  }
};

cargarProductos();
