const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  
  res.json({
    
    success: true,
    
    message: "Bay Point Restaurant API"
    
  });
  
});

module.exports = router;