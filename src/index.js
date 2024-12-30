import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importo BrowserRouter dhe Routes vetëm një herë

import App from './App'; // Sigurohu që App është importuar vetëm një herë
import Linjat from './components/Linjat/linjat'; // Sigurohu që komponenti Linjat është importuar
import Airport from './components/Airport/Airport';
import KutiaAnkesave from './components/KutiaAnkesave/KutiaAnkesave';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />  {/* Rruga për faqen kryesore */}
        <Route path="/linjat" element={<Linjat />} />  {/* Rruga për faqen e linjave */}
        <Route path="/airport" element={<Airport />} />
        <Route path="/KutiaAnkesave" element={<KutiaAnkesave />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
