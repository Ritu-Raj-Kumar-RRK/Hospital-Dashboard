import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorPatientsList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('/api/doctor-patients')
      .then(response => setPatients(response.data))
      .catch(error => console.error('Error fetching patients:', error));
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Doctor's Patients List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id} className="mb-2">
            <div className="font-medium">{patient.name}</div>
            <div className="text-sm text-gray-600">Status: {patient.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorPatientsList;
