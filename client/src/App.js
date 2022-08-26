import { Route, Routes } from 'react-router-dom';

import ProgramContainer from './containers/ProgramContainer';

import Layout from '@components/Layout';
import AboutProjectPage from '@pages/AboutProjectPage';
import AcceptanceOfApplicationsPage from '@pages/AcceptanceOfApplicationsPage';
import CatalogPage from '@pages/CatalogPage';
import ReferenceSectionPage from '@pages/ReferenceSectionPage';

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
      </Routes>
    </div>
  );
}

export default App;
