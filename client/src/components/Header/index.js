import cn from 'classnames';
import React from 'react';

import Menu from '../Menu';

import style from './Header.module.scss';

import '../../App.scss';
import logo from '@assets/img/Logo.png';

const Header = () => {
  return (
    <header className={style.headerSystemName}>
      <div className={cn(style.headerSystemNameWrap, 'wrap')}>
        <a href="index.html">
          <img className={style.logo} src={logo} alt="logo" />
        </a>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
