import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/default/default">User</Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/about",
              state: { demo: "demo1222", hobby:'Yoga' },
            }}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
