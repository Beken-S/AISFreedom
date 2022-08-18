import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Menu from '@components/Menu';

const Layout = () => {
  return (
    <div className="contentWrapper">
      <div className="topContent">
        <Header />
        <section className="services">
          <div className="servicesWrap">
            <Menu />
            <div className="mainService">
              <Outlet />
              {/* <SearchAnalogs />
              <Analogs /> */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
