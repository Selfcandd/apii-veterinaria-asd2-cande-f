const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Veterinaria",
    version: "1.0.0",
    description: "API asd veterinaria",
  },
  servers: [
    {
      url: "https://api-veterinaria-cande.onrender.com",
      description: "Servidor producción",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
