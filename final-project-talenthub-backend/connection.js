const mysql = require("mysql2");

// Konfigurasi koneksi database
const pool = mysql.createPool({
  host: "localhost", // Host database
  user: "root", // Username MySQL Anda
  password: "", // Password MySQL Anda
  database: "anda-restoran", // Nama database
});

// Test koneksi
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
  connection.release(); // Kembalikan koneksi ke pool
});

module.exports = pool;
