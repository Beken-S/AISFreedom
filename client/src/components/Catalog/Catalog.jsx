import React from 'react';

import { CatalogItem } from '../CatalogItem';
import Pagination from '../Pagination';

import style from './Catalog.module.scss';

export const Catalog = ({ programs, totalCountPages, changePage }) => {
  return (
    <section className={style.Catalog}>
      <ul className={style.programsList}>
        {programs.length === 0 ? (
          <div className={style.err}>Ничего не найдено :(</div>
        ) : (
          programs.map((el, i) => {
            return <CatalogItem program={el} key={i} />;
          })
        )}
      </ul>
      {programs.length !== 0 && (
        <Pagination pages={totalCountPages} changePage={changePage} />
      )}
    </section>
  );
};
