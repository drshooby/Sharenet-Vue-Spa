const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(bodyParser.json());

// Configure MySQL connection
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST, // Localhost for local MySQL server
    user: process.env.MYSQL_USER,      // Your MySQL username
    password: process.env.MYSQL_PASSWORD, // Your MySQL password
    database: process.env.MYSQL_DATABASE, // The database you just created
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test and Configure MySQL
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }

    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS \`${process.env.MYSQL_TABLE}\` (
        id INT AUTO_INCREMENT PRIMARY KEY,
        workshop_id INT NOT NULL,
        date DATE NOT NULL,
        venue VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

    connection.query(createTableQuery, (err, _) => {
        if (err) {
            console.error("Error creating table:", err);
        }
    });
    connection.release();
});

// API to save booking
app.post("/api/bookings", (req, res) => {
    const { workshopId, date, venue } = req.body;

    if (!workshopId || !date || !venue) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const query = `INSERT INTO \`${process.env.MYSQL_TABLE}\` (workshop_id, date, venue) VALUES (?, ?, ?)`;

    pool.query(query, [workshopId, date, venue], (err, _) => {
        if (err) {
            console.error("Error saving booking:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json({ message: "Booking saved successfully" });
    });
});

// Start server
if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
}

module.exports = app; // Export the app for testing
