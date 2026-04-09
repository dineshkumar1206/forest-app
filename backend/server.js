const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
// const nodemailer = require("nodemailer"); // Commented out for now
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

/* // --- 2. EMAIL SETUP (Nodemailer - For Future Use) ---
// const transporter = nodemailer.createTransport({
//   service: 'gmail', 
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS, 
//   },
// });
*/

// --- 3. API ENDPOINT TO HANDLE FORM SUBMISSION ---
app.post("/api/book", async (req, res) => {
  try {
     const { name, phone, adults, kids, checkIn, checkOut, packages } = req.body;
    // A. Save to MySQL Database
       const sqlQuery = `
         INSERT INTO bookings (name, phone, adults, kids, checkIn, checkOut, packages) 
         VALUES (?, ?, ?, ?, ?, ?, ?)
       `;
       
       await pool.execute(sqlQuery, [
         name,
         phone,
         adults || 0,
         kids || 0,
         checkIn,
         checkOut,
         (packages && packages.length > 0) ? packages.join(", ") : null
       ]);
       
    /*
    // B. Send Email to Owner (For Future Use)
    // const mailOptionsOwner = {
    //   from: process.env.EMAIL_USER,
    //   to: process.env.OWNER_EMAIL,
    //   subject: "🎉 New Booking Request!",
    //   text: `New booking request from ${name} (${phone}).\nDates: ${checkIn} to ${checkOut}.\nGuests: ${adults} Adults, ${kids} Kids.`
    // };
    // await transporter.sendMail(mailOptionsOwner);
    */

    // Success Response
    res.status(200).json({ success: true, message: "Booking saved to database!" });

  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// --- 4. START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));