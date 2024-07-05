import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('/api/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Doctors List</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id} className="mb-2">
            <div className="font-medium">{doctor.name}</div>
            <div className="text-sm text-gray-600">{doctor.specialization}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
