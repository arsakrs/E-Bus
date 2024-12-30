import React, { useState } from 'react';
import './kutiaankesave.css';  // Import the CSS file for styling

const KutiaAnkesave = () => {
  const [complaint, setComplaint] = useState('');
  const [error, setError] = useState(''); // New state for error message

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
    setError(''); // Clear error message when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    if (complaint.trim()) {
      alert("Complaint submitted: " + complaint);
      setComplaint(''); // Reset the complaint box after submission
    } else {
      setError("Ju lutem shkruani një ankesë para se ta dërgoni."); // Show error message
    }
  };

  return (
    <div className="complaint-box-container">
      <h2>Kutia e Ankesave</h2>
      <textarea 
        value={complaint}
        onChange={handleComplaintChange}
        placeholder="Shkruani ankesën tuaj këtu..."
        rows="5" // Add rows to make the textarea bigger
      />
      <button 
        onClick={handleSubmit} 
        disabled={!complaint.trim()} // Disable button if complaint is empty
      >
        Dërgo Ankesën
      </button>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default KutiaAnkesave;
