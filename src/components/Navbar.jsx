import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to={`/`}>
          REACT - APP
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://avatars.githubusercontent.com/u/41828945?v=4"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">Ahmad Nizar</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to={`login`}>
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
