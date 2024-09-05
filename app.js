const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/addBooking");

app.use(express.json());

app.use("/", router);

app.listen(port, (req, res) => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Documentacions en http://localhost:${port}/api-docs`);
});
