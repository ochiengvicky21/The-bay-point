const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { getAdmin } = require("../services/authService");

exports.login = async (req, res) => {
  
  try {
    
    const { username, password } = req.body;
    
    const admin = await getAdmin();
    
    if (!admin || username !== admin.username) {
      
      return res.status(401).json({
        
        success: false,
        
        message: "Invalid username or password."
        
      });
      
    }
    
    const match = await bcrypt.compare(password, admin.password);
    
    if (!match) {
      
      return res.status(401).json({
        
        success: false,
        
        message: "Invalid username or password."
        
      });
      
    }
    
    const token = jwt.sign(
      
      {
        
        id: admin.id,
        
        username: admin.username,
        
        role: admin.role
        
      },
      
      process.env.JWT_SECRET,
      
      {
        
        expiresIn: process.env.JWT_EXPIRES
        
      }
      
    );
    
    res.cookie("token", token, {
      
      httpOnly: true,
      
      secure: false,
      
      sameSite: "lax",
      
      maxAge: 7 * 24 * 60 * 60 * 1000
      
    });
    
    return res.json({
      
      success: true,
      
      message: "Login successful.",
      
      admin: {
        
        id: admin.id,
        
        name: admin.name,
        
        role: admin.role
        
      }
      
    });
    
  } catch (error) {
    
    console.error(error);
    
    return res.status(500).json({
      
      success: false,
      
      message: "Server error."
      
    });
    
  }
  
};

exports.logout = (req, res) => {
  
  res.clearCookie("token");
  
  return res.json({
    
    success: true,
    
    message: "Logged out successfully."
    
  });
  
};