import React from "react";
import "../Header/Header.css";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import TopLane from "../Lanes/Top Lane/Top-Lane";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/"className="Logo-Link">
          <img
            className="Logo"
            src="https://play-lh.googleusercontent.com/l6iBBhrah3mNhvcjZgZBwICAF5uu3KjorU4pq-eMOxYgT_L_TnpzT7a3TmmdxaMMgbUy"
          />
        </Link>
        <h1>Pokemon Unite Tier List</h1>
        <ul>
          <li>
            <Link to="top-lane">Top Lane</Link>
          </li>
          <li>
            <Link to="center-lane">Center Lane</Link>
          </li>
          <li>
            <Link to="bottom-lane">Bottom Lane</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Header;
