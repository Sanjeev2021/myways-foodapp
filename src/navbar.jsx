import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#f5f5f5",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    padding: "16px",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Homepage
      </Link>
      <Link to="/form" style={linkStyle}>
        Form
      </Link>
    </nav>
  );
}

export default Navbar;
