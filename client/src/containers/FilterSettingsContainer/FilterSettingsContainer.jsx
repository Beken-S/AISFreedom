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
  error,
}) => {
  return (
    <FilterSettings
      isCheckedPO={isCheckedPO}
      setCheckedPO={setCheckedPO}
      isCheckedAnalog={isCheckedAnalog}
      setCheckedAnalog={setCheckedAnalog}
      resetSearch={resetSearch}
      error={error}
    />
  );
};
const mapStateToProps = (state) => ({
  error: state.catalog.error,
});

export default connect(mapStateToProps, { resetSearch })(
  FilterSettingsContainer
);
