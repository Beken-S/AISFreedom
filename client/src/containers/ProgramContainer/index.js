import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Program } from '@components/Program';
import { getItem } from '@store/thunks/searchThunk';
const ProgramContainer = ({ item, getItem, img }) => {
  const { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, [id]);

  return <Program item={item} img={img} />;
};
const mapStateToProps = (state) => ({
  item: state.soft.item,
  img: state.soft.img,
});
export default connect(mapStateToProps, { getItem })(ProgramContainer);
