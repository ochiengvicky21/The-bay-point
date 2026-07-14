const express = require("express");

const router = express.Router();

const reservationRoutes = require("./reservationRoutes");
const authRoutes = require("./authRoutes");

router.get("/", (req, res) => {
  
  res.json({
    
    success: true,
    
    message: "The Bay Point Restaurant API"
    
  });
  
});

router.use("/auth", authRoutes);
router.use("/reservations", reservationRoutes);

module.exports = router;