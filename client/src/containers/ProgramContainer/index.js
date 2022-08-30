import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Loader } from '@components/Loader';
import { Program } from '@components/Program';
import { getItem } from '@store/thunks/searchThunk';

const ProgramContainer = ({ item, getItem, isLoading }) => {
  const { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, [id]);
  if (isLoading) {
    return <Loader />;
  } else {
    return <Program item={item} />;
  }
};
const mapStateToProps = (state) => ({
  item: state.soft.item,
  isLoading: state.soft.isLoading,
});
export default connect(mapStateToProps, { getItem })(ProgramContainer);
