const express = require("express");

const router = express.Router();

const reservationController = require("../controllers/reservationController");

// Create Reservation
router.post("/", reservationController.createReservation);

// Get All Reservations
router.get("/", reservationController.getReservations);

module.exports = router;