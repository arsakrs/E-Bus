import React from 'react';
import './njoftimet.css';
import photo1 from '../../image/t1.png';
import photo2 from '../../image/t2.png';
import photo3 from '../../image/t3.png';

function Njoftimet() {
  const njoftimet = [
    {
      img: photo1,
      title: 'Eliminohen paqartësitë rreth procesit të blerjes së autobusëve për Ndërmarrjes',
      link: '#',
    },
    {
      img: photo2,
      title: 'Takimi me stafin për strategjinë e re të zhvillimit',
      link: '#',
    },
    {
      img: photo3,
      title: 'Kryeshefi Ekzekutiv i “Trafikut Urban” priti Drejtorin Gjeneral të ...',
      link: '#',
    },
  ];

  const cmimet = [
    {
      title: 'Biletë për një drejtim',
      price: '0.50€',
      description: 'Një biletë e rregullt autobusi, e cila mund të përdoret vetëm për një drejtim.',
    },
    {
      title: 'Bileta Ditore',
      price: '0.80€',
      description:
        'Përfshin udhëtime vajtje-ardhje pa limit përgjatë 24 orëve. Përdoret për gjitha linjat e Trafikut Urban.',
    },
    {
      title: 'Bileta Mujore',
      price: '13.50€',
      description:
        'Përdoret për gjitha linjat e Trafikut Urban. Bileta Mujore e Linjës – Për nxënës dhe studentë është 10€/muaj. Për qytetarët e tjerë është 12€/muaj.',
    },
  ];

  return (
    <div>
      {/* Seksioni për njoftimet */}
      <div id="Njoftim" className="njoftimet-container">
        <button className="read-more-button">Njoftimet</button>
        <div className="njoftimet-grid">
          {njoftimet.map((njoftim, index) => (
            <div className="njoftimet-item" key={index}>
              <img src={njoftim.img} alt={`Njoftim ${index + 1}`} className="njoftimet-img" />
              <p className="njoftimet-title">{njoftim.title}</p>
              <a href={njoftim.link} className="njoftimet-link">
                Më shumë
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Seksioni për çmimet */}
      <div className="cmimet-container">
        <h2 className="cmimet-title">Çmimet e Biletave</h2>
        <div className="cmimet-grid">
          {cmimet.map((cmim, index) => (
            <div className="cmimet-card" key={index}>
              <h3 className="card-title">{cmim.title}</h3>
              <p className="price">{cmim.price}</p>
              <p className="card-description">{cmim.description}</p>
              <button className="read-more">Më shumë &#8250;</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Njoftimet;
