import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Menu from "../Menu";


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
