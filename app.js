const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/addBooking");
const swaggerSetup = require("./swagger");
app.use(express.json());

app.use("/", router);
swaggerSetup(app);

app.listen(port, (req, res) => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Documentacions en http://localhost:${port}/api-docs`);
});
