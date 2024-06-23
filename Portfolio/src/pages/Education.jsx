// src/components/Education.jsx
import React from 'react';

const Education = () => {
  return (
    <div className="p-4 bg-yellow-50">
  <h1 className="text-3xl font-bold text-center mb-4 underline">Education</h1>

  <div className="flex space-x-4">
    <div className="bg-gray-200 shadow rounded p-4 flex-1 custom-card">
      <h2 className="text-2xl font-semibold">Current:</h2>
      <p className="mt-2">B.Tech in Computer Science & Engineering</p>
      <p className="mt-1">College: NIT Rourkela</p>
      <p className="mt-1">Passing Year: 2026</p>
      <p className="mt-1">CGPA: <strong>8.83/10.00</strong></p>
      <a href="https://drive.google.com/file/d/11jipAiFPdtqFqCAp--JJIhiYtd4w8nMT/view" className="text-blue-700"
      >Grade Card</a>
    </div>

    <div className="bg-gray-200 shadow rounded p-4 flex-1 custom-card">
      <h2 className="text-2xl font-semibold">Intermediate:</h2>
      <p className="mt-2">Shree Krishna International School</p>
      <p className="mt-1">Passing Year: 2021</p>
      <p className="mt-1">Board: CBSE</p>
      <p className="mt-1">Percentage: <strong>88.4%</strong></p>
      <a href="https://drive.google.com/file/d/1bjTOFkh8GHp0eW2llanC73MLBSSjP209/view" className="text-blue-700"
      >MarkSheet</a>
    </div>

    <div className="bg-gray-200 shadow rounded p-4 flex-1 custom-card">
      <h2 className="text-2xl font-semibold">Matriculation:</h2>
      <p className="mt-2">SBD International School</p>
      <p className="mt-1">Passing Year: 2019</p>
      <p className="mt-1">Board: CBSE</p>
      <p className="mt-1">Percentage: <strong>97.2%</strong></p>
      <a href="https://drive.google.com/file/d/1PoRUfUhmNr8EItiWnHCLPe9EfFnic9NJ/view" className="text-blue-700"
      >MarkSheet</a>
    </div>
  </div>
</div>




  );
};

export default Education;
