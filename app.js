const express = require("express");
const app = express();
const router = require("./routes/addBooking");

require("dotenv").config();
const port = process.env.PORT || 3005;
const swaggerSetup = require("./swagger");
app.use(express.json());

app.use("/", router);
swaggerSetup(app);

app.listen(port, (req, res) => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Documentacions en http://localhost:${port}/api-docs`);
});
