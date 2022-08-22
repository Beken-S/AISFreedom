import React from 'react';

import Menu from '../Menu';

import style from './Header.module.scss';

import logo from '@assets/img/Logo.png';

const Header = () => {
  return (
    <header className={style.headerSystemName}>
      <div className={style.headerSystemNameWrap}>
        <a href="index.html">
          <img src={logo} alt="logo" />
        </a>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
