import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Catalog } from '@components/Catalog/Catalog';
import { getProgram, getCurrentPage } from '@store/thunks/searchThunk';

const CatalogContainer = ({
  getProgram,
  getCurrentPage,
  programs,
  totalCountPages,
}) => {
  useEffect(() => {
    getProgram();
  }, []);

  return (
    <Catalog
      programs={programs}
      totalCountPages={totalCountPages}
      getCurrentPage={getCurrentPage}
    />
  );
};
const mapStateToProps = (state) => ({
  programs: state.soft.programs,
  filtered: state.soft.filtered,
  totalCountPages: state.soft.totalCountPages,
});

export default connect(mapStateToProps, { getProgram, getCurrentPage })(
  CatalogContainer
);
