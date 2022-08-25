import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={style.content__wrapper}>
      <div className={style.top__content}>
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
