import logo from '@assets/img/Logo.png';
import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu';

import style from './Header.module.scss';
const Header = () => {
  return (
    <header className={style.header}>
      <div className={cn(style.header__wrap, style.wrap)}>
        <Link to="/" className={style.header__logo}>
          <img src={logo} alt="logo" />
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
