import React from 'react';
import DoctorList from './Dashboard/DoctorList';
import DoctorPatientsList from './Dashboard/DoctorPatientsList';
import PatientDetails from './Dashboard/PatientDetails';
import AppointmentManagement from './Dashboard/AppointmentManagement';
import NewOldPatients from './Dashboard/NewOldPatients';
import UpcomingAppointments from './Dashboard/UpcomingAppointments';
import AppointmentsByDisease from './Dashboard/AppointmentsByDisease';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Hospital Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DoctorList />
        <DoctorPatientsList />
        <PatientDetails />
        <AppointmentManagement />
        <NewOldPatients />
        <UpcomingAppointments />
        <AppointmentsByDisease />
      </div>
    </div>
  );
};

export default Dashboard;
