import cn from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import style from './Menu.module.scss';

const Menu = () => {
  const [menuItemsToggle, setMenuItemsToggle] = useState(false);
  const handleBtnClick = () => setMenuItemsToggle(!menuItemsToggle);
  const closeActiveBlock = () => setMenuItemsToggle(false);

  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.header__container}>
          <div
            className={style.header__container__burger}
            onClick={handleBtnClick}
          >
            <div
              className={cn(
                style.header__container__burger__item,
                style.burger__item
              )}
            >
              <span
                className={cn(
                  style.burger__item__line,
                  style.burger__item__line__first
                )}
              ></span>
              <span
                className={cn(
                  style.burger__item__line,
                  style.burger__item__line__second
                )}
              ></span>
              <span
                className={cn(
                  style.burger__item__line,
                  style.burger__item__line__third
                )}
              ></span>
            </div>
          </div>
          <div
            className={`style.header__container__inner ${
              !menuItemsToggle ? style.burger__non__active : ''
            }`}
          >
            <nav className={style.header__menu} onClick={closeActiveBlock}>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? 'rgb(50, 129, 226)' : '',
                  transitionDuration: isActive ? '0.6s' : '',
                  textDecoration: isActive ? 'underline' : '',
                })}
                className={
                  window.location.pathname.indexOf('/', 0) === -1
                    ? style.header__menu__item
                    : cn(
                        style.header__menu__item,
                        style.header__menu__item__active
                      )
                }
              >
                О ПРОЕКТЕ
              </NavLink>
              <span className={style.slash}>/</span>
              <NavLink
                to="/catalog"
                style={({ isActive }) => ({
                  color: isActive ? 'rgb(50, 129, 226)' : '',
                  transitionDuration: isActive ? '0.6s' : '',
                  textDecoration: isActive ? 'underline' : '',
                })}
                className={
                  window.location.pathname.indexOf('/analog', 0) === -1
                    ? style.header__menu__item
                    : cn(
                        style.header__menu__item,
                        style.header__menu__item__active
                      )
                }
              >
                КАТАЛОГ
              </NavLink>
              <span className={style.slash}>/</span>
              <NavLink
                to="/reference"
                style={({ isActive }) => ({
                  color: isActive ? 'rgb(50, 129, 226)' : '',
                  transitionDuration: isActive ? '0.6s' : '',
                  textDecoration: isActive ? 'underline' : '',
                })}
                className={
                  window.location.pathname.indexOf('/reference', 0) === -1
                    ? style.header__menu__item
                    : cn(
                        style.header__menu__item,
                        style.header__menu__item__active
                      )
                }
              >
                СПРАВОЧНЫЙ РАЗДЕЛ
              </NavLink>
              <span className={style.slash}>/</span>
              <NavLink
                to="/applications"
                style={({ isActive }) => ({
                  color: isActive ? 'rgb(50, 129, 226)' : '',
                  transitionDuration: isActive ? '0.6s' : '',
                  textDecoration: isActive ? 'underline' : '',
                })}
                className={
                  window.location.pathname.indexOf('/applications', 0) === -1
                    ? style.header__menu__item
                    : cn(
                        style.header__menu__item,
                        style.header__menu__item__active
                      )
                }
              >
                ПРИЕМ ЗАЯВОК
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Menu;
