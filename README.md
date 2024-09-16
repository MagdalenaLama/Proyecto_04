# Proyecto 4: Reservas Hoteleras

## Índice

- [Proyecto 4: Reservas Hoteleras](#proyecto-4-reservas-hoteleras)
  - [Índice](#índice)
  - [Introducción](#introducción)
  - [Estructura del Proyecto](#estructura-del-proyecto)
    - [Endpoints a Implementar](#endpoints-a-implementar)

## Introducción

En este proyecto, se desarrollará una aplicación para la gestión de **reservas hoteleras**, aplicando las 4 operaciones **CRUD** y otras 6 relacionadas con filtro, utilizando **Node.js** y **Express**.

El objetivo principal es permitir a los usuarios realizar y gestionar reservas de hotel, mientras que los administradores podrán acceder y manipular la información de estas reservas. Adicionalmente, el sistema incluye la **documentación de la API** usando **Swagger**.

## Estructura del Proyecto

- Se crea un servidor con **Node.js** y **Express**.
- Se establece un archivo `.en` para las variables de entorno que para el ejerciocio es el puerto en 3000.
- Se crea un archivo `.gitignore` donde se incluyena la carpeta `node_modules` más los archivos `package-lock.json` y `.env`
- Se establece arquitectura de carpetas de forma que la asignación de responsabilidades del código pueda ser ubicado fácilmente:

### Endpoints a Implementar

| Descripción                              | Método | Endpoint                                                      | Ejemplo de Uso                  |
| ---------------------------------------- | ------ | ------------------------------------------------------------- | ------------------------------- |
| Crear reserva                            | POST   | `/api/reservas`                                               | Crear una reserva               |
| Obtener lista de reservas                | GET    | `/api/reservas`                                               | Listar reservas                 |
| Obtener información de una reserva       | GET    | `/api/reservas/:id`                                           | Ver una reserva específica      |
| Actualizar información de una reserva    | PUT    | `/api/reservas/:id`                                           | Actualizar una reserva          |
| Eliminar una reserva específica          | DELETE | `/api/reservas/:id`                                           | Eliminar una reserva            |
| Filtrar reservas por hotel               | GET    | `/api/reservas?hotel=HOTEL`                                   | Filtrar por hotel               |
| Filtrar reservas por rango de fechas     | GET    | `/api/reservas?fecha_inicio=FECHA_INICIO&fecha_fin=FECHA_FIN` | Filtrar por fechas              |
| Filtrar reservas por tipo de habitación  | GET    | `/api/reservas?tipo_habitacion=TIPO_HABITACION`               | Filtrar por habitación          |
| Filtrar reservas por estado              | GET    | `/api/reservas?estado=ESTADO`                                 | Filtrar por estado              |
| Filtrar reservas por número de huéspedes | GET    | `/api/reservas?num_huespedes=NUM_HUESPEDES`                   | Filtrar por número de huéspedes |
