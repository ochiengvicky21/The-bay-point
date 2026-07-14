const fs = require("fs").promises;
const path = require("path");

const reservationFile = path.join(
  __dirname,
  "..",
  "data",
  "reservations.json"
);

/**
 * Read all reservations
 */
async function getReservations() {
  
  try {
    
    const data = await fs.readFile(reservationFile, "utf8");
    
    return JSON.parse(data);
    
  } catch (error) {
    
    return [];
    
  }
  
}

/**
 * Save all reservations
 */

async function saveReservations(reservations) {
  
  await fs.writeFile(
    
    reservationFile,
    
    JSON.stringify(reservations, null, 2)
    
  );
  
}

module.exports = {
  
  getReservations,
  
  saveReservations
  
};