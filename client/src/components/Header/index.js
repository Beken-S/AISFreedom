import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Menu from '../Menu';

import style from './Header.module.scss';

import '../../App.scss';
import logo from '@assets/img/Logo.png';

const Header = () => {
  return (
    <header className={style.headerSystemName}>
      <div className={cn(style.headerSystemNameWrap, 'wrap')}>
        <NavLink to="/">
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
        <Menu />
        <NavLink to="/admin/login" className={style.headerService}>
          <i className="far fa-user-circle"></i>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
