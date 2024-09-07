import React from 'react';
import { Link } from 'react-router-dom';
import calendarIcon from '../assets/calendar.png';
import messagesIcon from '../assets/messages.png';
import homeIcon from '../assets/home.png';
import notificationsIcon from '../assets/notifications.png';
import profileIcon from '../assets/profile.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/calendar">
        <img src={calendarIcon} alt="Calendario" />
      </Link>
      <Link to="/messages">
        <img src={messagesIcon} alt="Mensajes" />
      </Link>
      <Link to="/">
        <img src={homeIcon} alt="Inicio" />
      </Link>
      <Link to="/notifications">
        <img src={notificationsIcon} alt="Notificaciones" />
      </Link>
      <Link to="/profile">
        <img src={profileIcon} alt="Perfil" />
      </Link>
    </nav>
  );
};

export default Navbar;