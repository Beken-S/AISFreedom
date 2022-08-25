import React from 'react';

import { CatalogItem } from '../CatalogItem';
import Pagination from '../Pagination';

import style from './Catalog.module.scss';

export const Catalog = ({ filtered }) => {
  return (
    <section className={style.Catalog}>
      <ul className={style.programsList}>
        {filtered.map((el, i) => {
          return <CatalogItem program={el} key={i} />;
        })}
      </ul>
      <Pagination />
    </section>
  );
};
