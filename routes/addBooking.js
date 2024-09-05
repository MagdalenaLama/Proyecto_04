const express = require("express");
const router = express.Router();
const controlers = require("../controller.js");

router.post("/reservas", controlers.crearReserva);
router.get("/reservas", controlers.obtenerReservas);

module.exports = router;
