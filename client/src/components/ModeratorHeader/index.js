import cn from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.scss';
import './Material.scss';
import { NavLink } from 'react-router-dom';

import styles from './ModeratorHeader.module.scss';

import { selectAuthUser } from '@store/selectors/Auth-selectors';
import { fetchLogout } from '@store/thunks/Auth-thunks';

export const ModeratorHeader = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => selectAuthUser(state));

  const handleOnClick = () => {
    dispatch(fetchLogout());
  };
  return (
    <header className={styles.headerSystemName}>
      <div className={cn(styles.headerSystemNameWrap, 'wrap')}>
        <h2 className={styles.moderatorName}>
          <span>{auth?.name || 'admin'}</span>
          <button className="material-symbols-outlined" onClick={handleOnClick}>
            logout
          </button>
        </h2>
        <nav className={styles.headerMenuModerator}>
          <NavLink to="/" className={styles.headerService}>
            На главную
          </NavLink>
          <span> / </span>
          <NavLink to="/moderator" className={styles.headerService}>
            Потребности
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
