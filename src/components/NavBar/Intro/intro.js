import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Navbar from '../navbar';
import './intro.css';
import photo1 from './linjat.jpg';
import photo2 from './airplane.jpg';
import photo3 from './kutia.jpg';

const Intro = () => {
  const sections = [
    {
      img: photo1,
      title: 'Orari dhe Linjat',
      description: 'Informacion mbi oraret dhe linjat kryesore të udhëtimeve.',
      link: '/linjat', // Rruga për faqen e linjave
    },
    {
      img: photo2,
      title: 'Linjat e Aeroportit',
      description: 'Linjat e dedikuara për transport në aeroport.',
      link: '/airport',
    },
    {
      img: photo3,
      title: 'Kutia e Ankesave',
      description: 'Kontaktoni për pyetje ose ankesa.',
      link: '/ankesa',
    },
  ];

  return (
    <section id="intro">
      <Navbar />
      <div className="booking-page">
        <header className="header">
          <h1>Udhëto shpejtë dhe komod me Trafikun Urban</h1>
        </header>
        <div className="sections-grid">
          {sections.map((section, index) => (
            <Link to={section.link} key={index} className="section-item">
              <img src={section.img} alt={section.title} className="section-img" />
              <h3 className="section-title">{section.title}</h3>
              <p className="section-description">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
