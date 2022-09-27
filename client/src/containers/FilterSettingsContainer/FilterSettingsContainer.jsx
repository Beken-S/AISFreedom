import React from 'react';
import { connect } from 'react-redux';

import FilterSettings from '@components/FilterSettings';
import { resetSearch } from '@store/thunks/Catalog-thunks';

const FilterSettingsContainer = ({
  resetSearch,
  isCheckedPO,
  setCheckedPO,
  isCheckedAnalog,
  setCheckedAnalog,
  typesPrograms,
  error,
  allOs,
}) => {
  return (
    <FilterSettings
      isCheckedPO={isCheckedPO}
      setCheckedPO={setCheckedPO}
      isCheckedAnalog={isCheckedAnalog}
      setCheckedAnalog={setCheckedAnalog}
      resetSearch={resetSearch}
      error={error}
      typesPrograms={typesPrograms}
      allOs={allOs}
    />
  );
};
const mapStateToProps = (state) => ({
  error: state.catalog.error,
  typesPrograms: state.catalog.typesPrograms,
  allOs: state.catalog.allOs,
});

export default connect(mapStateToProps, { resetSearch })(
  FilterSettingsContainer
);
