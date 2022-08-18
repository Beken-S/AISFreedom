import React from 'react';
import { connect } from 'react-redux';

import Analogs from '../../components/Analogs/Analogs';

const AnalogsContainer = ({ filtered }) => {
  return <Analogs filtered={filtered} />;
};
const mapStateToProps = (state) => ({
  filtered: state.soft.filtered,
});

export default connect(mapStateToProps, {})(AnalogsContainer);
