const { v4: uuid } = require("uuid");

const {
  
  getReservations,
  
  saveReservations
  
} = require("../services/reservationService");


// ===========================
// CREATE RESERVATION
// ===========================

exports.createReservation = async (req, res) => {
  
  try {
    
    const {
      
      fullName,
      
      email,
      
      phone,
      
      date,
      
      time,
      
      guests,
      
      message
      
    } = req.body;
    
    const reservations = await getReservations();
    
    const reservation = {
      
      id: uuid(),
      
      fullName,
      
      email,
      
      phone,
      
      date,
      
      time,
      
      guests,
      
      message,
      
      status: "Pending",
      
      createdAt: new Date().toISOString()
      
    };
    
    reservations.push(reservation);
    
    await saveReservations(reservations);
    
    return res.status(201).json({
      
      success: true,
      
      message: "Reservation submitted successfully.",
      
      reservation
      
    });
    
  } catch (error) {
    
    console.log(error);
    
    return res.status(500).json({
      
      success: false,
      
      message: "Unable to save reservation."
      
    });
    
  }
  
};


// ===========================
// GET ALL
// ===========================

exports.getReservations = async (req, res) => {
  
  const reservations = await getReservations();
  
  return res.json({
    
    success: true,
    
    count: reservations.length,
    
    data: reservations
    
  });
  
};