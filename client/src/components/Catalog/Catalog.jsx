import React from 'react';

import { CatalogItem } from '../CatalogItem';
import Pagination from '../Pagination';

import style from './Catalog.module.scss';

export const Catalog = ({ programs, totalCountPages, getCurrentPage }) => {
  return (
    <section className={style.Catalog}>
      <ul className={style.programsList}>
        {programs.map((el, i) => {
          return <CatalogItem program={el} key={i} />;
        })}
      </ul>
      <Pagination pages={totalCountPages} getCurrentPage={getCurrentPage} />
    </section>
  );
};
