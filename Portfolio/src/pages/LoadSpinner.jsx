
import React from 'react';

const LoadSpinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="loader">Loading...</div>
    <style>{`
      .loader {
        border: 4px solid #f3f3f3;
        border-radius: 50%;
        border-top: 4px solid #3498db;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default LoadSpinner;
