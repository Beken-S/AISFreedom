import React from 'react';

import style from './Footer.module.scss';
import '@src/App.scss';

const Footer = () => {
  return (
    <footer className={style.pageFooter}>
      <div className={style.footerWrap}>
        <span>
          © 2022. АИС "Свобода". Created by: Geekbrains students team.
        </span>
        <nav className={style.footerNav}>
          <a href="#11" className={style.socialNetwork} target="_blank">
            <i className="fab fa-vk"></i>
          </a>
          <a href="#22" className={style.socialNetwork} target="_blank">
            <i className="fab fa-odnoklassniki"></i>
          </a>
          <a href="#33" className={style.socialNetwork} target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
