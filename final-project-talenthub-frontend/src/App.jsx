import React, { useState, useEffect } from "react";
import axios from "axios"; // Untuk fetch data dari backend
import "./App.css";

function App() {
  const [menus, setMenus] = useState([]); // State untuk menyimpan data menu

  // Fetch data dari backend saat pertama kali render
  useEffect(() => {
    axios
      .get("/api/menu") // Ganti sesuai URL backend Anda
      .then((response) => setMenus(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Anda's Restaurant
          </a>
          <div className="ms-auto">
            <button className="btn btn-outline-light">
              <i className="bi bi-cart-fill"></i> Cart
            </button>
          </div>
        </div>
      </nav>

      {/* Body */}
      <div className="container mt-4">
        <div className="row">
          {/* Tampilkan setiap menu dalam bentuk card */}
          {menus.map((menu) => (
            <div className="col-md-4 mb-4" key={menu.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{menu.nama}</h5>
                  <p className="card-text">{menu.deskripsi}</p>
                  <p className="card-text text-success">Rp {menu.harga.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
