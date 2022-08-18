import React from 'react';

import style from './Header.module.scss';

import logo from '@assets/img/Logo.png';

const Header = () => {
  return (
    <header className={style.headerSystemName}>
      <div className={style.headerSystemNameWrap}>
        <a href="index.html">
          <img src={logo} alt="logo" />
        </a>
        <h1 className={style.systemNameText}>
          АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА
        </h1>
      </div>
    </header>
  );
};

export default Header;
