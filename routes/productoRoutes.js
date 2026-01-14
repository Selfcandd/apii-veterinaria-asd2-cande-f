const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Listar productos
 *     description: Devuelve todos los productos cargados en la veterinaria
 *     tags:
 *       - Productos
 */
router.get('/', productoController.obtenerProductos);

/**
 * @swagger
 * /productos/buscar:
 *   get:
 *     summary: Buscar productos por nombre
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 */
router.get('/buscar', productoController.buscarProductos);

/**
 * @swagger
 * /productos/categoria/{nombre}:
 *   get:
 *     summary: Buscar productos por categoría
 *     tags:
 *       - Productos
 */
router.get('/categoria/:nombre', productoController.obtenerPorCategoria);

/**
 * @swagger
 * /productos/precio/{min}-{max}:
 *   get:
 *     summary: Buscar productos por rango de precio
 *     tags:
 *       - Productos
 */
router.get('/precio/:min-:max', productoController.obtenerPorPrecio);

/**
 * @swagger
 * /productos/{codigo}:
 *   get:
 *     summary: Obtener un producto por código
 *     tags:
 *       - Productos
 */
router.get('/:codigo', productoController.obtenerProductoPorCodigo);

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crear un producto
 *     tags:
 *       - Productos
 */
router.post('/', productoController.crearProducto);

/**
 * @swagger
 * /productos/masivo:
 *   post:
 *     summary: Agregar varios productos juntos
 *     tags:
 *       - Productos
 */
router.post('/masivo', productoController.cargaMasiva);

/**
 * @swagger
 * /productos/{codigo}:
 *   put:
 *     summary: Actualizar un producto
 *     tags:
 *       - Productos
 */
router.put('/:codigo', productoController.actualizarProducto);

/**
 * @swagger
 * /productos/{codigo}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags:
 *       - Productos
 */
router.delete('/:codigo', productoController.eliminarProducto);

module.exports = router;
