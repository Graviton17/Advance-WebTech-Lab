import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#333", color: "#fff" }}>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
          gap: "1rem",
        }}
      >
        <li>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Products
          </Link>
        </li>
        <li>
          <Link to="/reviews" style={{ color: "#fff", textDecoration: "none" }}>
            Customer Review
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
