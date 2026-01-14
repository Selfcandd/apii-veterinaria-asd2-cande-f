const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Veterinaria",
    version: "1.0.0",
    description: "API Veterinaria - CRUD de productos",
  },
  servers: [
    {
      url: "https://apii-veterinaria-cande.onrender.com",
      description: "Servidor producción (Render)",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
