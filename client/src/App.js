import { Route, Routes } from 'react-router-dom';

import Glossary from './components/Glossary';
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
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutProjectPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProgramContainer />} />
          <Route path="/reference" element={<ReferenceSectionPage />} />
          <Route
            path="/applications"
            element={<AcceptanceOfApplicationsPage />}
          />
          <Route path="*" element={<p>404</p>} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
