let reservas = [
  {
    id: "",
    hotel: "Sol",
    fechaInicio: "2024-09-18",
    fechaFin: "2024-09-20",
    tipoHabitacion: "Doble",
    estado: "El estado de la reserva es confirmada",
    numHuespedes: 2,
  },
];

exports.crearReserva = (req, res) => {
  let nuevaReserva = req.body;
  nuevaReserva.id = Date.now();
  reservas.push(nuevaReserva);
  res.json({ msg: "reserva creada con éxito", data: nuevaReserva });
};
exports.obtenerReservas = (req, res) => {
  res.json({
    msg: "Reservas obtenidas con éxito.",
    data: reservas,
  });
};
exports.infoReserva = (req, res) => {};
exports.actualizarReserva = (req, res) => {};
exports.eliminarReserva = (req, res) => {};
exports.filtrarReservaPorId = (req, res) => {};
exports.filtrarReservaPorFecha = (req, res) => {};
exports.filtrarReservaPorTipoHabitacion = (req, res) => {};
exports.filtrarReservaPorEstado = (req, res) => {};
exports.filtrarReservaPorNumHuespedes = (req, res) => {};
