let reservas = [
  {
    id: "",
    hotel: "Sol",
    fecha_inicio: "2024-09-18",
    fecha_fin: "2024-09-20",
    tipo_habitacion: "Doble",
    estado: "El estado de la reserva es confirmada",
    num_huespedes: 2,
  },
];

exports.crearReserva = (req, res) => {
  let nuevaReserva = req.body;
  nuevaReserva.id = Date.now();
  reservas.push(nuevaReserva);
  res.json({ msg: "reserva creada con éxito", data: nuevaReserva });
};
exports.obtenerReservas = (req, res) => {
  let {
    hotel,
    fecha_inicio,
    fecha_fin,
    tipo_habitacion,
    estado,
    num_huespedes,
  } = req.query;
  console.log(req.query);

  let reservasFiltradas = reservas.filter((reser) => {
    if (hotel && reser.hotel !== hotel) {
      return false;
    }
    if (fecha_inicio && reser.fecha_inicio !== fecha_inicio) {
      return false;
    }
    if (fecha_fin && reser.fecha_fin !== fecha_fin) {
      return false;
    }
    if (tipo_habitacion && reser.tipo_habitacion !== tipo_habitacion) {
      return false;
    }
    if (estado && reser.estado !== estado) {
      return false;
    }
    if (num_huespedes && reser.num_huespedes !== parseInt(num_huespedes)) {
      return false;
    }
    return true;
  });
  if (reservasFiltradas.length === 0) {
    return res.status(404).json({ msg: "Reserva no encontrada" });
  }

  res.json({
    msg: "Reservas obtenidas con éxito.",
    data: reservasFiltradas,
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
