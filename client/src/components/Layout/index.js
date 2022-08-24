import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';

const Layout = () => {
  return (
    <div className="contentWrapper">
      <div className="topContent">
        <Header />
        <section className="services">
          <div className="servicesWrap">
            <div className="mainService">
              <Outlet />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
