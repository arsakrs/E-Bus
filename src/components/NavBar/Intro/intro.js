import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Navbar from '../navbar'; // Import Navbar component
import './intro.css'; // Import specific CSS styling for this component
import photo1 from './linjat.jpg'; // Image for Orari dhe Linjat
import photo2 from './airplane.jpg'; // Image for Linjat e Aeroportit
import photo3 from './kutia.jpg'; // Image for Kutia e Ankesave

const Intro = () => {
  // Define the sections with their corresponding images, titles, descriptions, and links
  const sections = [
    {
      img: photo1,
      title: 'Orari dhe Linjat',
      description: 'Informacion mbi oraret dhe linjat kryesore të udhëtimeve.',
      link: '/linjat', // Correct route for the Linjat page
    },
    {
      img: photo2,
      title: 'Linjat e Aeroportit',
      description: 'Linjat e dedikuara për transport në aeroport.',
      link: '/airport', // Correct route for the Airport routes page
    },
    {
      img: photo3,
      title: 'Kutia e Ankesave',
      description: 'Kontaktoni për pyetje ose ankesa.',
      link: '/kutiaankesave', // Correct route for the Complaints box page
    },
  ];

  return (
    <section id="intro">
      <Navbar /> {/* Include the Navbar component */}
      <div className="booking-page">
        <header className="header">
          <h1>Udhëto shpejtë dhe komod me Trafikun Urban</h1> {/* Main header */}
        </header>
        <div className="sections-grid">
          {/* Map through each section and create a link for it */}
          {sections.map((section, index) => (
            <Link to={section.link} key={index} className="section-item">
              <img
                src={section.img}
                alt={section.title}
                className="section-img" // Image for the section
              />
              <h3 className="section-title">{section.title}</h3> {/* Title of the section */}
              <p className="section-description">{section.description}</p> {/* Description for the section */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
