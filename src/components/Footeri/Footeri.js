import React from 'react';
import logo from './llogo.jpg'; // Corrected import statement
import './Footeri.css'; // Ensure to create a Footer.css file for the styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        {/* Display logo */}
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>Welcome to our website. Stay connected for more updates.</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>123 Street Name</p>
        <p>City, Country</p>
        <p>Email: contact@example.com</p>
      </div>
      <div className="footer-copyright">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
