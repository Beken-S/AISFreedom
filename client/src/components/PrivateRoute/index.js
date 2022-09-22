import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ auth }) {
  return auth ? <Outlet /> : <Navigate to="/" replace />;
}

export default PrivateRoute;
