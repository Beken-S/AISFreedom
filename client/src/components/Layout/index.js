import cn from 'classnames';
import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './Layout.module.scss';

import '../../App.scss';
import Footer from '@components/Footer';
import Header from '@components/Header';

const Layout = () => {
  return (
    <div className={style.contentWrapper}>
      <div className={style.topContent}>
        <Header />
        <section className={style.services}>
          <div className={cn(style.servicesWrap, 'wrap')}>
            <div className={style.mainService}>
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
