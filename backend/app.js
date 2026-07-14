require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();

// Security
app.use(helmet());

// Compression
app.use(compression());

// Logging
app.use(morgan("dev"));

// CORS
app.use(cors({
  origin: true,
  credentials: true
}));

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies
app.use(cookieParser());

// Uploads
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api", routes);

// Health Check
app.get("/", (req, res) => {
  
  res.json({
    
    success: true,
    
    application: "The Bay Point API",
    
    version: "1.0.0",
    
    status: "Running"
    
  });
  
});

// 404
app.use((req, res) => {
  
  res.status(404).json({
    
    success: false,
    
    message: "Endpoint not found."
    
  });
  
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`);
  
});