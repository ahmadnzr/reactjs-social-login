import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">REACT - APP</span>
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
    </div>
  );
};

export default Navbar;
