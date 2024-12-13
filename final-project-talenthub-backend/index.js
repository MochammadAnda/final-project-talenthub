const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./connection"); // Import koneksi database

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5713", // Izinkan frontend React
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Selamat datang di backend Anda's Restaurant!");
});

// Endpoint untuk mendapatkan semua menu
app.get("/api/menu", (req, res) => {
  const query = "SELECT * FROM menu";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
