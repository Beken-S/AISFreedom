import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute({ auth }) {
  return !auth ? <Outlet /> : <Navigate to="/admin" replace />;
}

export default PublicRoute;
