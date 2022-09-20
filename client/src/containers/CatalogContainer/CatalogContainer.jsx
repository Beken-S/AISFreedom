import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Loader } from '../../components/Loader';
// import { store } from '../../store/store';
import {
  filterProgramsThunk,
  getPrograms,
  setCurrentPageThunk,
} from '../../store/thunks/Catalog-thunks';

import { Catalog } from '@components/Catalog/Catalog';

const CatalogContainer = ({
  getPrograms,
  programs,
  totalCountPages,
  filtered,
  isSearch,
  setCurrentPageThunk,
  isFilter,
  filterProgramsThunk,
  isLoading,
  typeOs,
  currentPage,
  portionPage,
}) => {
  // console.log(store.getState().catalog);
  useEffect(() => {
    getPrograms();
  }, []);

  const changePage = (page) => {
    setCurrentPageThunk(page);
    if (isFilter) {
      filterProgramsThunk(page);
    }
    if (!isSearch && !isFilter) {
      getPrograms(page);
    }
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <Catalog
        programs={isSearch || isFilter ? filtered : programs}
        totalCountPages={totalCountPages}
        changePage={changePage}
        typeOs={typeOs}
        currentPage={currentPage}
        portionPage={portionPage}
      />
    );
  }
};

const mapStateToProps = (state) => ({
  programs: state.catalog.programs,
  filtered: state.catalog.filtered,
  totalCountPages: state.catalog.totalCountPages,
  isSearch: state.catalog.isSearch,
  isFilter: state.catalog.isFilter,
  isLoading: state.catalog.isLoading,
  typeOs: state.catalog.typeOs,
  currentPage: state.catalog.currentPage,
  portionPage: state.catalog.portionPage,
});

export default connect(mapStateToProps, {
  getPrograms,
  setCurrentPageThunk,
  filterProgramsThunk,
})(CatalogContainer);
