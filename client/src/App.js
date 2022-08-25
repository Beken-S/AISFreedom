import { Route, Routes } from 'react-router-dom';

import ProgramContainer from './containers/ProgramContainer';

import Layout from '@components/Layout';
import AboutProjectPage from '@pages/AboutProjectPage';
import AcceptanceOfApplicationsPage from '@pages/AcceptanceOfApplicationsPage';
import CatalogPage from '@pages/CatalogPage';
import LoginPage from '@pages/LoginPage';
import ReferenceSectionPage from '@pages/ReferenceSectionPage';
import RegistrationPage from '@pages/RegistrationPage';

import './App.scss';

function App() {
  return (
    <div className="container__main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutProjectPage />} />
          <Route path="/analog" element={<CatalogPage />} />
          <Route path="/analog/:id" element={<ProgramContainer />} />
          <Route path="/reference" element={<ReferenceSectionPage />} />
          <Route
            path="/applications"
            element={<AcceptanceOfApplicationsPage />}
          />
          <Route path="*" element={<p>404</p>} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
