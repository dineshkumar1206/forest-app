const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const cors = require("cors");
require("dotenv").config();

const app = express();

// --- CORS SETUP ---
app.use(cors({
    origin: [
        'https://forest-app-psi.vercel.app',
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

// --- 1. SEQUELIZE CONNECTION ---
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false, // Console-la SQL queries varaama irukka
    }
);

// --- 2. DEFINE MODEL (TABLE STRUCTURE) ---
const Booking = sequelize.define('Booking', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adults: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    kids: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    checkIn: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    checkOut: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    packages: {
        type: DataTypes.STRING,
        // Array-ah string-ah mathi store panna udhavum
        allowNull: false
    }
}, {
    tableName: 'bookings', // DB-la table name bookings nu irukkum
    timestamps: true       // createdAt, updatedAt automatic-ah varum
});

// --- 3. ✨ AUTOMATIC TABLE SYNC ✨ ---
// alter: true kudutha, neenga column add panna automatic-ah update aagum
sequelize.sync({ alter: true })
    .then(() => console.log("✅ MySQL Tables Synced Successfully"))
    .catch((err) => console.log("❌ MySQL Sync Error:", err));

// --- 4. API ENDPOINTS ---

app.get('/foreststay_v2', (req, res) => {
    res.send('Foreststay backend running with Sequelize')
});

// Post Booking Data
app.post("/foreststay_v2/api/book", async (req, res) => {
    try {
        const { name, phone, adults, kids, checkIn, checkOut, packages } = req.body;
        //  console.log("📩 Incoming Booking Data:", req.body);
        // A. Save to MySQL using Sequelize
        const newBooking = await Booking.create({
            name,
            phone,
            adults: adults || 0,
            kids: kids || 0,
            checkIn,
            checkOut,
            packages // model-oda 'set' method automatic-ah join panni store pannum
        });
        // console.log("✅ Saved Booking:", newBooking.toJSON());

        // Success Response
        res.status(200).json({ 
            success: true, 
            message: "Booking saved successfully!", 
            data: newBooking 
        });

    } catch (error) {
        console.error("Booking Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// --- 5. START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));