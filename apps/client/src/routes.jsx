import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';

import { Login } from './pages/Login';
import PrivateRoutes from './components/PrivateRoute';

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        {/* PRIVATE ROUTES */}
        <Route element={<PrivateRoutes />}>
          <Route element={<div>home</div>} path="/home" />
        </Route>
        {/* OPEN ROUTES */}
        <Route element={<Login />} path="/login" />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
