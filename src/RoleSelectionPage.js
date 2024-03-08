import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelectionPage.css'; // Import the CSS file for custom styling

function RoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleScan = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/resume-ats-score'); // Navigate to the ATS score page
    }, 3000); // Delay for 3 seconds
  };

  const handleCancel = () => {
    setResumeText('');
  };

  return (
    <div className="role-selection-container">
      <h1 className="text-center">Select Your Role</h1>
      <div className="role-selection-form">
        <select className="form-select" value={selectedRole} onChange={handleRoleChange}>
          <option value="" disabled>Select a role...</option>
          <option value="Business Analyst">Business Analyst</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
        </select>
        <textarea
          className="form-control mt-3"
          placeholder="Paste your resume text here..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={handleScan}>Scan</button>
        <button className="btn btn-secondary mt-3" onClick={handleCancel}>Cancel</button>
        {isLoading && <div className="loading-spinner mt-3"></div>}
      </div>
    </div>
  );
}

export default RoleSelectionPage;
