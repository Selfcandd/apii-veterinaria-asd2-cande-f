require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// rutas
const productoRoutes = require("./routes/productoRoutes");

// swagger
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

// middleware para JSON
app.use(express.json());

// conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error(err));

// ruta raíz (la API funciona)
app.get("/", (req, res) => {
  res.send("API Veterinaria funcionandoooo");
});

// rutas de productos
app.use("/productos", productoRoutes);

// swagger ui
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
