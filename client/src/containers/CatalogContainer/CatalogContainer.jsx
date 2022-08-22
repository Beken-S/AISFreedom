import React from 'react';
import { connect } from 'react-redux';

import { Catalog } from '@components/Catalog/Catalog';

const CatalogContainer = ({ freeSoft, filtered }) => {
  return <Catalog freeSoft={freeSoft} filtered={filtered} />;
};
const mapStateToProps = (state) => ({
  freeSoft: state.soft.freeSoft,
  filtered: state.soft.filtered,
});

export default connect(mapStateToProps, {})(CatalogContainer);
