const express = require("express");
const router = express.Router();
const controlers = require("../controller/controller.js");

/**
 * @swagger
 * components:
 *  schemas:
 *    Reserva:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            example: 1
 *          hotel:
 *            type: string
 *            example: Hyatt
 *          fecha_inicio:
 *            type: string
 *            example: "2024-09-18"
 *          fecha_fin:
 *            type: string
 *            example: "2024-09-20"
 *          tipo_habitacion:
 *            type: string
 *            example: "Doble"
 *          estado:
 *            type: string
 *            example: "pendiente"
 *          num_huespedes:
 *            type: integer
 *            example: 2
 */

// Create

router.post("/reservas", controlers.crearReserva);
/**
 * @swagger
 * /reservas:
 *   get:
 *     summary: Obtiene la lista completa de reservas
 *     responses:
 *       200:
 *         description: Lista completa de reservas
 *         content:
 *            application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     hotel:
 *                       type: string
 *                       example: Hyatt
 *                     fecha_inicio:
 *                       type: string
 *                       example: "2024-09-18"
 *                     fecha_fin:
 *                       type: string
 *                       example: "2024-09-20"
 *                     tipo_habitacion:
 *                       type: string
 *                       example: "Doble"
 *                     estado:
 *                       type: string
 *                       example: "pendiente"
 *                     num_huespedes:
 *                       type: integer
 *                       example: "2"
 */
router.get("/reservas", controlers.obtenerReservas);
// Read
router.get("/reservas/:id", controlers.infoReserva);
// Update
router.put("/reservas/:id", controlers.actualizarReserva);
// Delete
router.delete("/reservas/:id", controlers.eliminarReserva);

module.exports = router;
