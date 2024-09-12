const express = require("express");
const router = express.Router();
const controlers = require("../controller/controller.js");

/**
 * @swagger
 * components:
 *  schemas:
 *    Reservas:
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
/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crea una nueva reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 hotel:
 *                   type: string
 *                   example: Hyatt
 *                 fecha_inicio:
 *                   type: string
 *                   example: "2024-09-18"
 *                 fecha_fin:
 *                   type: string
 *                   example: "2024-09-20"
 *                 tipo_habitacion:
 *                   type: string
 *                   example: "Doble"
 *                 estado:
 *                   type: string
 *                   example: "Pendiente"
 *                 num_huespedes:
 *                   type: integer
 *                   example: 2
 *     responses:
 *       200:
 *         description: Se entrega el detalle de la reserva creada con su id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservas'
 */

router.post("/reservas", controlers.crearReserva);

//GET and FILTER
/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtiene la lista completa de reservas o la lista de reservas que cumplan con los filtros requeridos
 *     parameters:
 *       - in: query
 *         name: hotel
 *         example: Hyatt
 *         schema:
 *           type: string
 *         description: Nombre del hotel
 *       - in: query
 *         name: fecha_inicio
 *         example: "2024-09-18"
 *         schema:
 *           type: string
 *         description: Fecha inicio reserva / Fecha inicio período a buscar
 *       - in: query
 *         name: fecha_fin
 *         example: "2024-09-20"
 *         schema:
 *           type: string
 *         description: Fecha fin reserva / Fecha fin período a buscar
 *       - in: query
 *         name: tipo_habitacion
 *         example: "Doble"
 *         schema:
 *           type: string
 *         description: Tipo de habitación a filtrar
 *       - in: query
 *         name: estado
 *         example: "Pendiente"
 *         schema:
 *           type: string
 *         description: Estado de la reserva
 *       - in: query
 *         name: num_huespedes
 *         example: 3
 *         schema:
 *           type: integer
 *         description: Filtrar por número de huéspedes
 *     responses:
 *       200:
 *         description: Lista reservas que cumplan con la búsqueda
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */

router.get("/reservas", controlers.obtenerReservas);

// Read

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Información de una reserva específica según su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id único de la reserva
 *     responses:
 *       200:
 *         description: Datos de la reserva
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservas'
 *       404:
 *         description: No se encuentra ninguna reserva con el Id requerido
 */

router.get("/reservas/:id", controlers.infoReserva);

// Update
/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar información de una reserva específica
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id único de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservas'
 *     responses:
 *       200:
 *         description: Reserva actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservas'
 *       404:
 *         description: No se encuentra ninguna reserva con el Id requerido
 */

router.put("/reservas/:id", controlers.actualizarReserva);

// Delete

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva específica
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id único de la reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada con éxito
 *       404:
 *         description: No se encuentra ninguna reserva con el Id requerido
 */

router.delete("/reservas/:id", controlers.eliminarReserva);

module.exports = router;
