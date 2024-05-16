// /src/components/ProgressBar.jsx
import React from 'react';
import '../App.css';

const ProgressBar = ({ current, total }) => {
    const width = (current / total) * 100;
  
    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${width}%` }}></div>
      </div>
    );
  };
  
  export default ProgressBar;