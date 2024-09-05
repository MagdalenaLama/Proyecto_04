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
exports.infoReserva = (req, res) => {
  let id = parseInt(req.params.id);
  let reserva = reservas.find((reserv) => reserv.id === id);
  if (!reserva) {
    res
      .status(404)
      .json({ msg: `No se encuentra ninguna reserva bajo el id: ${id}` });
  } else {
    res.json({ msg: "Datos de su reserva:", info: reserva });
  }
};

exports.actualizarReserva = (req, res) => {
  let id = parseInt(req.params.id);
  let infoActualizada = req.body;
  let reserva = reservas.find((reserv) => reserv.id === id);
  if (reserva) {
    infoActualizada.id = Date.now();
    reservas.push(infoActualizada);
    res.json({
      msg: `Reserva actualizada con éxito bajo el numero de reserva de:${infoActualizada.id} `,
      data: infoActualizada,
    });
  } else {
    res
      .status(404)
      .json({ msg: `No se encuentra ninguna reserva bajo el id: ${id}` });
  }
};
exports.eliminarReserva = (req, res) => {
  let id = parseInt(req.params.id);
  let index = reservas.findIndex((reser) => reser.id === id);
  if (index === -1) {
    res
      .status(404)
      .json({ msg: `No se encuentra ninguna reserva bajo el id: ${id}` });
  } else {
    reservas.splice(index, 1);
    res.json({ msg: "Reserva eliminada con éxito" });
  }
};
exports.filtrarReservaPorId = (req, res) => {};
exports.filtrarReservaPorFecha = (req, res) => {};
exports.filtrarReservaPorTipoHabitacion = (req, res) => {};
exports.filtrarReservaPorEstado = (req, res) => {};
exports.filtrarReservaPorNumHuespedes = (req, res) => {};
