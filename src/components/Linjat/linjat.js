import React from 'react';
import './Linjat.css'; // Make sure the path to the CSS file is correct

const busRoutes = [
  { line: 'Linja 1', route: 'Bregu i Diellit - Fushë Kosovë' },
  { line: 'Linja 1A', route: 'St. Autobusëve - Prishtinë -> Aeroport' },
  { line: 'Linja 3', route: 'Rrethi Mati - fsh. Bardhosh' },
  { line: 'Linja 3B', route: 'Bërnicë e Ulët -> Rrethi i Matit' },
  { line: 'Linja 3C', route: 'Sinidoll - Bregu i Diellit' },
  { line: 'Linja 4', route: 'Lagjja Mat - Parku i Gërmisë' },
  { line: 'Linja 7C', route: 'Kalabri - Qendër - Kalabri' },
  { line: 'Linja 15', route: 'Prishtinë -> Keçekollë -> Prapashticë' },
  { line: 'Linja 19', route: 'Kishnicë - Graçanicë - Prishtinë' },
];

const Linjat = () => {
  return (
    <div className="bus-routes-container">
      <h2>Orari dhe Linjat</h2>
      {busRoutes.map((route, index) => (
        <div key={index} className="bus-route">
          <span className="bus-line">{route.line}</span>
          <span className="bus-destination">{route.route}</span>
        </div>
      ))}
    </div>
  );
};

export default Linjat;
