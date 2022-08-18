import React from 'react';
import { connect } from 'react-redux';

import { Catalog } from '../../components/Catalog/Catalog';

const CatalogContainer = ({ freeSoft }) => {
  return <Catalog freeSoft={freeSoft} />;
};
const mapStateToProps = (state) => ({
  freeSoft: state.soft.freeSoft,
});

export default connect(mapStateToProps, {})(CatalogContainer);
