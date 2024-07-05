import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('/api/upcoming-appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id} className="mb-2">
            <div className="font-medium">Date: {appointment.date}</div>
            <div className="text-sm text-gray-600">Doctor: {appointment.doctor}</div>
            <div className="text-sm text-gray-600">Patient: {appointment.patient}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingAppointments;
