const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const twilio = require("twilio");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// --- 1. MYSQL DATABASE CONNECTION POOL ---
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test the connection
pool.getConnection()
  .then(() => console.log("✅ MySQL Database Connected Successfully"))
  .catch((err) => console.log("❌ MySQL Connection Error:", err));

// --- 2. WHATSAPP SETUP (Twilio) ---
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// --- 3. API ENDPOINT TO HANDLE FORM SUBMISSION ---
app.post("/api/book", async (req, res) => {
  try {
    // Removed 'email' from the destructured body
    const { name, phone, adults, kids, checkIn, checkOut } = req.body;

    // A. Save to MySQL Database (Removed email column from query)
    const sqlQuery = `INSERT INTO bookings (name, phone, adults, kids, checkIn, checkOut) VALUES (?, ?, ?, ?, ?, ?)`;
    await pool.execute(sqlQuery, [name, phone, adults, kids, checkIn, checkOut]);

    // B. Send WhatsApp to Owner (Using Twilio)
    await twilioClient.messages.create({
      body: `🌲 *New Forest Stay Booking*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Dates:* ${checkIn} to ${checkOut}\n*Guests:* ${adults} Adults, ${kids} Kids`,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`, 
      to: `whatsapp:+91${phone}` // Adjust this to your actual receiving phone number
    });

    // Success Response
    res.status(200).json({ success: true, message: "Booking saved and WhatsApp sent!" });

  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// --- 4. START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));