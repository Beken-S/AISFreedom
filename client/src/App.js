import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Glossary from '@components/Glossary';
import Layout from '@components/Layout';
import PrivateRoute from '@components/PrivateRoute';
import PublicRoute from '@components/PublicRoute';
import ProgramContainer from '@containers/ProgramContainer';
import AboutProjectPage from '@pages/AboutProjectPage';
import AcceptanceOfApplicationsPage from '@pages/AcceptanceOfApplicationsPage';
import CatalogPage from '@pages/CatalogPage';
import LoginPage from '@pages/LoginPage';
import ModeratorPage from '@pages/ModeratorPage';
import ReferenceSectionPage from '@pages/ReferenceSectionPage';
import RegistrationPage from '@pages/RegistrationPage';
import { selectAuthStatus } from '@store/selectors/Auth-selectors';
import { fetchRefreshToken } from '@store/thunks/Auth-thunks';

import './App.scss';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuthStatus, shallowEqual);

  useEffect(() => {
    dispatch(fetchRefreshToken());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutProjectPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProgramContainer />} />
          <Route path="/reference" element={<ReferenceSectionPage />} />
          <Route
            path="/reference/:file_name"
            element={<ReferenceSectionPage />}
          />
          <Route
            path="/applications"
            element={<AcceptanceOfApplicationsPage />}
          />
          <Route path="*" element={<p>404</p>} />
        </Route>
        <Route path="/admin">
          <Route path="" element={<PrivateRoute auth={auth} />}>
            <Route path="" element={<ModeratorPage />} />
          </Route>
          <Route path="login" element={<PublicRoute auth={auth} />}>
            <Route path="" element={<LoginPage />} />
          </Route>
        </Route>
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
