
import React from 'react'
import './airport.css';

const airport = () => {
  return (
<div className="airport-page">
      <header className="airport-header">
        <h1>Welcome to International Airport</h1>
        <p>Your gateway to the world</p>
      </header>

      <section className="airport-info">
        <div className="flight-status">
          <h2>Flight Status</h2>
          <ul>
            <li>Flight AA123 - On Time</li>
            <li>Flight BA456 - Delayed</li>
            <li>Flight DL789 - On Time</li>
          </ul>
        </div>

        <div className="airport-services">
          <h2>Services</h2>
          <ul>
            <li>Free Wi-Fi</li>
            <li>VIP Lounges</li>
            <li>Currency Exchange</li>
            <li>Shuttle Services</li>
          </ul>
        </div>
      </section>

      <footer className="airport-footer">
        <p>&copy; 2024 International Airport</p>
      </footer>
    </div>
      );
    };

export default airport