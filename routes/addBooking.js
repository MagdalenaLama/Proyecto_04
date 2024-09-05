const express = require("express");
const router = express.Router();
const controlers = require("../controller.js");

router.post("/reservas", controlers.crearReserva);
router.get("/reservas", controlers.obtenerReservas);
router.get("/reservas/:id", controlers.infoReserva);
router.put("/reservas/:id", controlers.actualizarReserva);
router.delete("/reservas/:id", controlers.eliminarReserva);
module.exports = router;
