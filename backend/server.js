const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(bodyParser.json());

// Configure MySQL connection
const db = mysql.createConnection({
    host: "localhost", // Localhost for local MySQL server
    user: "root",      // Your MySQL username
    password: "Mo05e123@", // Your MySQL password
    database: "workshops_db", // The database you just created
    port: 3306,        // Default MySQL port
});

// Connect to MySQL
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
