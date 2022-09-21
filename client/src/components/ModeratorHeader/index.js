import cn from 'classnames';
import React from 'react';
import '../../App.scss';
import './Material.scss';
import { NavLink } from 'react-router-dom';

import styles from './ModeratorHeader.module.scss';

export const ModeratorHeader = () => {
  return (
    <header className={styles.headerSystemName}>
      <div className={cn(styles.headerSystemNameWrap, 'wrap')}>
        <h2 className={styles.moderatorName}>
          <span>Фамилия И.О.</span>
          <NavLink to="/login" className="material-symbols-outlined">
            logout
          </NavLink>
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
