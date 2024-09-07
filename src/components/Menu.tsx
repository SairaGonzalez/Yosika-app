import React, { useState } from "react";
import menuIcono from "../assets/menu.png";
import "./Menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <img
        src={menuIcono}
        alt="Menú"
        className="menu-toggle"
        onClick={toggleMenu}
      />
      {isOpen && (
        <div className="menu-content">
          <h2 className="menu-title">MENÚ</h2>
          <ul className="menu">
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index} className="menu-item">
                SERVICIO</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
