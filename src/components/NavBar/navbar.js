import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css'; // Sigurohu që rruga është e saktë
import bg from '../../image/republik.png'; // Logoja për emblemën e Kosovës
import bg1 from '../../image/trafik.png'; // Logoja për autobusin

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { to: "intro", label: "Ballina", offset: -100 },
    { to: "RrethNesh", label: "Rreth Nesh", offset: -100 },
    { to: "Njoftim", label: "Njoftimet", offset: -100 },
    { to: "contact", label: "Kontakti", offset: -100 },
  ];

  const renderMenuItems = (isMobile = false) => (
    menuItems.map((item, index) => (
      <Link
        key={index}
        activeClass="active"
        to={item.to}
        spy={true}
        smooth={true}
        offset={item.offset}
        duration={500}
        className={isMobile ? "listItem" : "desktopMenuListItem"}
        onClick={() => isMobile && setShowMenu(false)}
      >
        {item.label}
      </Link>
    ))
  );

  return (
    <nav className="navbar">
      {/* Logo e majtë */}
      <div className="navbar-left">
        <img src={bg1} alt="Autobusi Logo" className="logo" />
      </div>

      {/* Menuja e desktopit */}
      <div className="desktopMenu">
        {renderMenuItems()}
      </div>

      {/* Logoja e djathtë */}
      <div className="navbar-right">
        <img src={bg} alt="Kosovo Emblem" className="emblem" />
      </div>

      {/* Ikona për menunë mobile */}
      <div className="mobileMenuIcon" onClick={() => setShowMenu(!showMenu)}>
        ☰ {/* Mund të zëvendësohet me një ikonë më të sofistikuar */}
      </div>

      {/* Menuja për pajisjet mobile */}
      <div className={`navMenu ${showMenu ? 'show' : ''}`}>
        {renderMenuItems(true)}
      </div>
    </nav>
  );
};

export default Navbar;
