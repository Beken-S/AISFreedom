import React from 'react';
import { connect } from 'react-redux';

import { Catalog } from '@components/Catalog/Catalog';

const CatalogContainer = ({ filtered }) => {
  return <Catalog filtered={filtered} />;
};
const mapStateToProps = (state) => ({
  filtered: state.soft.filtered,
});

export default connect(mapStateToProps, {})(CatalogContainer);
