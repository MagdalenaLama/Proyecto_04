const express = require("express");
const router = express.Router();
const controlers = require("../controller.js");

// Create
router.post("/reservas", controlers.crearReserva);
// List
router.get("/reservas", controlers.obtenerReservas);
// Read
router.get("/reservas/:id", controlers.infoReserva);
// Update
router.put("/reservas/:id", controlers.actualizarReserva);
// Delete
router.delete("/reservas/:id", controlers.eliminarReserva);

module.exports = router;
