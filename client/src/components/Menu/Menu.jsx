import React from "react";
import cn from "classnames";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { NavLink } from "react-router-dom";

import style from "./Menu.module.scss";

const Menu = () => {
  const [menuItemsToggle, setMenuItemsToggle] = useState(false);
  const handleBtnClick = () => setMenuItemsToggle(!menuItemsToggle);
  const closeActiveBlock = () => setMenuItemsToggle(false);
  const ref = useOnclickOutside(() => closeActiveBlock());

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
                class={cn(
                  style.burger__item__line,
                  style.burger__item__line__first
                )}
              ></span>
              <span
                class={cn(
                  style.burger__item__line,
                  style.burger__item__line__second
                )}
              ></span>
              <span
                class={cn(
                  style.burger__item__line,
                  style.burger__item__line__third
                )}
              ></span>
            </div>
          </div>
          <div
            ref={ref}
            className={`style.header__container__inner ${
              !menuItemsToggle ? style.burger__non__active : ""
            }`}
          >
            <nav className={style.header__menu} onClick={closeActiveBlock}>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#3281e2" : "",
                  borderLeft: isActive ? "solid 3.5px #3281e2" : "",
                  background: isActive ? "#fcfcfc" : "",
                })}
                className={
                  window.location.pathname.indexOf("/", 0) === -1
                    ? style.header__menu__item
                    : cn(
                        style.header__menu__item,
                        style.header__menu__item__active
                      )
                }
              >
                О ПРОЕКТЕ
              </NavLink>

              <NavLink
                to="/analog"
                style={({ isActive }) => ({
                  color: isActive ? "#3281e2" : "",
                  borderLeft: isActive ? "solid 3.5px #3281e2" : "",
                  background: isActive ? "#fcfcfc" : "",
                })}
                className={
                  window.location.pathname.indexOf("/analog", 0) === -1
                    ? style.header__menu__item
                    : cn(
                        style.header__menu__item,
                        style.header__menu__item__active
                      )
                }
              >
                КАТАЛОГ
              </NavLink>
              <NavLink
                to="/analogs"
                style={({ isActive }) => ({
                  color: isActive ? "#3281e2" : "",
                  borderLeft: isActive ? "solid 3.5px #3281e2" : "",
                  background: isActive ? "#fcfcfc" : "",
                })}
                className={
                  window.location.pathname.indexOf("/analogs", 0) === -1
                    ? style.header__menu__item
                    : cn(
                        style.header__menu__item,
                        style.header__menu__item__active
                      )
                }
              >
                ПОИСК АЛЬТЕРНАТИВ
              </NavLink>
              <NavLink
                to="/reference"
                style={({ isActive }) => ({
                  color: isActive ? "#3281e2" : "",
                  borderLeft: isActive ? "solid 3.5px #3281e2" : "",
                  background: isActive ? "#fcfcfc" : "",
                })}
                className={
                  window.location.pathname.indexOf("/reference", 0) === -1
                    ? style.header__menu__item
                    : cn(
                        style.header__menu__item,
                        style.header__menu__item__active
                      )
                }
              >
                СПРАВОЧНЫЙ РАЗДЕЛ
              </NavLink>
              <NavLink
                to="/applications"
                style={({ isActive }) => ({
                  color: isActive ? "#3281e2" : "",
                  borderLeft: isActive ? "solid 3.5px #3281e2" : "",
                  background: isActive ? "#fcfcfc" : "",
                })}
                className={
                  window.location.pathname.indexOf("/applications", 0) === -1
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

// {
//   /* <div className={style.servicesMenu}>
//       <h3>МЕНЮ</h3>
//       <a href="#1" className={style.changeServicesMenu}> О ПРОЕКТЕ </a>
//       <a href="#2" className={style.changeServicesMenu}> КАТАЛОГ </a>
//       <a href="#3" className={style.changeServicesMenu}> ПОИСК АЛЬТЕРНАТИВ </a>
//       <a href="#4" className={style.changeServicesMenu}> СПРАВОЧНЫЙ РАЗДЕЛ </a>
//       <a href="#5" className={style.changeServicesMenu}> ПРИЕМ ЗАЯВОК </a>
//     </div> */
// }
