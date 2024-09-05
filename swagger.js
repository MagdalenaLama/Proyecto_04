const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Hotel Booking - API-Docs",
    version: "1.0.0",
    description: "Documentation using Swagger",
  },
  server: [
    {
      url: "http://localhost:3000",
      description: "Local server",
    },
  ],
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerDefinition);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
