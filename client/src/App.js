import { Route, Routes } from 'react-router-dom';

import AboutProject from '@pages/AboutProject';
import Catalog from '@pages/Catalog';
import SeachAnalogs from '@pages/SeachAnalogs';
import ReferenceSection from '@pages/ReferenceSection';
import AcceptanceOfApplications from '@pages/AcceptanceOfApplications';
import Layout from '@components/Layout';

import './App.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutProject />} />
          <Route path="/analog" element={<Catalog />} />
          <Route path="/analogs" element={<SeachAnalogs />} />
          <Route path="/reference" element={<ReferenceSection/>} />
          <Route path="/applications" element={<AcceptanceOfApplications />} />
          <Route path="*" element={<p>404</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

