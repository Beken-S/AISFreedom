import { Catalog } from '@components/Catalog/Catalog';
import React from 'react';
import { connect } from 'react-redux';

const CatalogContainer = ({ freeSoft, filtered }) => {
  return <Catalog freeSoft={freeSoft} filtered={filtered} />;
};
const mapStateToProps = (state) => ({
  freeSoft: state.soft.freeSoft,
  filtered: state.soft.filtered,
});

export default connect(mapStateToProps, {})(CatalogContainer);
