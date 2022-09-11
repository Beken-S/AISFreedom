import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import '../../App.scss';
import style from './Pagination.module.scss';

const Pagination = ({
  pages = 1,
  changePage,
  currentPage,
  portionPage = 5,
}) => {
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  const portionCount = Math.ceil(pages / portionPage);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionPage + 1;
  const rightPortionPageNumber = portionNumber * portionPage;

  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionPage)),
    [currentPage]
  );

  const onChangePage = (page) => {
    changePage(page);
  };
  const onChangePageBack = () => {
    let page;
    if (currentPage === 1) {
      page = currentPage;
    } else {
      page = currentPage - 1;
      changePage(page);
    }
  };
  const onChangePageForward = () => {
    let page;
    if (currentPage === pages) {
      page = currentPage;
    } else {
      page = currentPage + 1;
      changePage(page);
    }
  };

  return (
    <nav className={style.pagination}>
      <div className={cn(style.pagination__wrap, 'wrap')}>
        <button className={style.pagination__arrow} onClick={onChangePageBack}>
          <i className="fas fa-angle-left" aria-hidden="true"></i>
        </button>
        {portionNumber > 1 && (
          <>
            <button
              className={
                currentPage === numberOfPages[0] ? style.active : style.page
              }
              onClick={() => {
                changePage(numberOfPages[0]);
              }}
            >
              {numberOfPages[0]}
            </button>
            <span
              className={style.page}
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
            >
              ...
            </span>
          </>
        )}
        {numberOfPages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((page, index) => {
            return (
              <button
                className={currentPage === page ? style.active : style.page}
                onClick={() => onChangePage(page)}
                key={index}
              >
                {page}
              </button>
            );
          })}
        {portionCount > portionNumber && (
          <>
            <span
              className={style.page}
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
            >
              ...
            </span>
            <button
              className={
                currentPage === numberOfPages.length ? style.active : style.page
              }
              onClick={() => {
                onChangePage(numberOfPages.length);
              }}
            >
              {numberOfPages.length}
            </button>
          </>
        )}
        <button
          className={style.pagination__arrow}
          onClick={onChangePageForward}
        >
          <i className="fas fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
