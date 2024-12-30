import React from 'react';
import './rrethnesh.css';
import BusImage from '../../image/busi.png'; // Sigurohu që ky path është i saktë

const RrethNesh = () => {
  return (
    <section id="rrethnesh" className="rrethnesh">
      <div className="container">
        {/* Përmbajtja e majtë */}
        <div className="text-content">
          <h1 className="main-heading">
            Pse duhet ta përdorim <br />
            <span className="highlight">Transportin Publik?</span>
          </h1>
          <ul className="benefits-list">
            <li>
              <span className="icon">🛡️</span> Sigurt dhe komod
            </li>
            <li>
              <span className="icon">🌱</span> Ndihmon në ruajtjen e ambientit
            </li>
            <li>
              <span className="icon">🚦</span> Redukton trafikun
            </li>
            <li>
              <span className="icon">💶</span> Çmim i arsyeshëm
            </li>
          </ul>
        </div>

        {/* Imazhi */}
        <div className="image-content">
          <img src={BusImage} alt="Autobusi i Trafikut Urban" className="bus-image" />
        </div>
      </div>
    </section>
  );
};

export default RrethNesh;
