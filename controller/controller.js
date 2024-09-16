let reservas = [
  {
    id: 1,
    hotel: "Sol",
    fecha_inicio: "2024-09-18",
    fecha_fin: "2024-09-20",
    tipo_habitacion: "Doble",
    estado: "El estado de la reserva es confirmada",
    num_huespedes: 2,
  },
];

exports.crearReserva = (req, res) => {
  const {
    hotel,
    fecha_inicio,
    fecha_fin,
    tipo_habitacion,
    estado,
    num_huespedes,
  } = req.body;

  if (
    !hotel ||
    !fecha_inicio ||
    !fecha_fin ||
    !tipo_habitacion ||
    !tipo_habitacion ||
    !estado ||
    !num_huespedes
  ) {
    res
      .status(404)
      .json({ msg: "Debe ingresar todos  los datos de la reserva" });
  } else {
    let nuevaReserva = { id: Date.now(), ...req.body };
    reservas.push(nuevaReserva);
    res
      .status(200)
      .json({ msg: "reserva creada con éxito", data: nuevaReserva });
  }
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

  let reservasFiltradas = reservas.filter((reser) => {
    if (hotel && reser.hotel.toLowerCase() !== hotel.toLowerCase()) {
      return false;
    }

    if (
      tipo_habitacion &&
      reser.tipo_habitacion.toLowerCase() !== tipo_habitacion.toLowerCase()
    ) {
      return false;
    }
    if (estado && reser.estado.toLowerCase() !== estado.toLowerCase()) {
      return false;
    }
    if (num_huespedes && reser.num_huespedes !== parseInt(num_huespedes)) {
      return false;
    }
    if (fecha_inicio && fecha_fin) {
      // Convertir las cadenas de fecha a objetos Date
      const fechaInicioRango = new Date(fecha_inicio);
      const fechaFinRango = new Date(fecha_fin);
      const fechaInicioReserva = new Date(reser.fecha_inicio);
      const fechaFinReserva = new Date(reser.fecha_fin);

      return (
        fechaInicioRango <= fechaFinReserva &&
        fechaFinRango >= fechaInicioReserva
      );
    }
    if (fecha_inicio && reser.fecha_inicio !== fecha_inicio) {
      return false;
    }
    if (fecha_fin && reser.fecha_fin !== fecha_fin) {
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
    res.status(200).json({ msg: "Datos de su reserva:", info: reserva });
  }
};

exports.actualizarReserva = (req, res) => {
  let id = parseInt(req.params.id);

  let indexReserva = reservas.findIndex((reserv) => reserv.id === id);
  if (indexReserva === -1) {
    return res
      .status(404)
      .json({ msg: `No se encuentra ninguna reserva bajo el id: ${id}` });
  } else {
    reservas[indexReserva] = { ...reservas[indexReserva], ...req.body };
    res.status(200).json({
      msg: `Reserva actualizada con éxito bajo el número de reserva de:${id} `,
      data: reservas[indexReserva],
    });
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
