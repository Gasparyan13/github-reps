import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Navigation.styled";

export function Navigation() {
  return (
    <Nav>
      <h3 style={{ fontWeight: "bold" }}>Github Search</h3>
      <span>
        <Link
          to="/"
          style={{
            fontSize: 20,
            marginRight: 20,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>
        <Link
          to="/favourites"
          style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
        >
          Favourites
        </Link>
      </span>
    </Nav>
  );
}
