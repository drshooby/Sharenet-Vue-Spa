const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost", // Use environment variable or fallback to localhost
  user: process.env.DB_USER || "root",     // Default user
  password: process.env.DB_PASSWORD || "Mo05e123@", // Default password
  database: process.env.DB_NAME || "workshops_db", // Default database
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// API to save booking
app.post("/api/bookings", (req, res) => {
  const { workshopId, date, venue } = req.body;

  if (!workshopId || !date || !venue) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const query = "INSERT INTO bookings (workshop_id, date, venue) VALUES (?, ?, ?)";
  db.query(query, [workshopId, date, venue], (err, results) => {
    if (err) {
      console.error("Error saving booking:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ message: "Booking saved successfully" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
