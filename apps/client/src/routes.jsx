import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';

import { Login } from './pages/Login';
import PrivateRoutes from './components/PrivateRoute';
import TodayPage from './pages/Today';

import PatientsPage from './pages/Patients';
import TreatmentsPage from './pages/Treatments';
import FinantialPage from './pages/Finantial';
import DoctorsPage from './pages/Doctors';
import AppointmentsPage from './pages/Appointments';
import ClinicPage from './pages/Clinic';
import { Container } from '@chakra-ui/react';

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        {/* PRIVATE ROUTES */}
        <Route element={<PrivateRoutes />}>
          <Route element={<TodayPage />} path="/hoje" />
          <Route element={<PatientsPage />} path="/pacientes" />
          <Route element={<DoctorsPage />} path="/medicos" />
          <Route element={<AppointmentsPage />} path="/consultas" />
          <Route element={<TreatmentsPage />} path="/tratamentos" />
          <Route element={<FinantialPage />} path="/financeiro" />
          <Route element={<ClinicPage />} path="/consultorio" />
        </Route>
        {/* OPEN ROUTES */}
        <Route element={<Login />} path="/login" />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
