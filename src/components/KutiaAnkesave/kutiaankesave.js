import React, { useState } from 'react';
import './kutiaankesave.css';  // Import the CSS file for styling

const KutiaAnkesave = () => {
  const [complaint, setComplaint] = useState('');

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmit = () => {
    if (complaint.trim()) {
      alert("Complaint submitted: " + complaint);
      setComplaint(''); // Reset the complaint box after submission
    } else {
      alert("Please write a complaint before submitting.");
    }
  };

  return (
    <div className="complaint-box-container">
      <h2>Kutia e Ankesave</h2>
      <textarea 
        value={complaint}
        onChange={handleComplaintChange}
        placeholder="Shkruani ankesën tuaj këtu..."
      />
      <button onClick={handleSubmit}>Dërgo Ankesën</button>
    </div>
  );
};

export default KutiaAnkesave;
