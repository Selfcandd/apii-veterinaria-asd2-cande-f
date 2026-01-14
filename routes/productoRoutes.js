const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Listar productos
 *     description: Devuelve todos los productos cargados en la veterinaria
 *     tags:
 *       - Productos
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get("/", productoController.obtenerProductos);

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
 *         description: Nombre del producto a buscar
 *     responses:
 *       200:
 *         description: Productos encontrados
 */
router.get("/buscar", productoController.buscarProductos);

/**
 * @swagger
 * /productos/categoria/{nombre}:
 *   get:
 *     summary: Buscar productos por categoría
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         schema:
 *           type: string
 *         description: Categoría del producto
 *     responses:
 *       200:
 *         description: Productos por categoría
 */
router.get("/categoria/:nombre", productoController.obtenerPorCategoria);

/**
 * @swagger
 * /productos/precio/{min}-{max}:
 *   get:
 *     summary: Buscar productos por rango de precio
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: min
 *         required: true
 *         schema:
 *           type: number
 *       - in: path
 *         name: max
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Productos por rango de precio
 */
router.get("/precio/:min-:max", productoController.obtenerPorPrecio);

/**
 * @swagger
 * /productos/{codigo}:
 *   get:
 *     summary: Obtener un producto por código
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       404:
 *         description: Producto no encontrado
 */
router.get("/:codigo", productoController.obtenerProductoPorCodigo);

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crear un producto
 *     tags:
 *       - Productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - codigo
 *               - nombre
 *               - precio
 *             properties:
 *               codigo:
 *                 type: string
 *                 example: VET001
 *               nombre:
 *                 type: string
 *                 example: Alimento balanceado para perros adultos
 *               precio:
 *                 type: number
 *                 example: 12500
 *               categoria:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["alimentos", "perros"]
 *     responses:
 *       201:
 *         description: Producto creado correctamente
 */
router.post("/", productoController.crearProducto);

/**
 * @swagger
 * /productos/masivo:
 *   post:
 *     summary: Agregar varios productos juntos
 *     tags:
 *       - Productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 codigo:
 *                   type: string
 *                 nombre:
 *                   type: string
 *                 precio:
 *                   type: number
 *                 categoria:
 *                   type: array
 *                   items:
 *                     type: string
 *     responses:
 *       201:
 *         description: Productos agregados correctamente
 */
router.post("/masivo", productoController.cargaMasiva);

/**
 * @swagger
 * /productos/{codigo}:
 *   put:
 *     summary: Actualizar un producto
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *               categoria:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente
 */
router.put("/:codigo", productoController.actualizarProducto);

/**
 * @swagger
 * /productos/{codigo}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente
 */
router.delete("/:codigo", productoController.eliminarProducto);

module.exports = router;
