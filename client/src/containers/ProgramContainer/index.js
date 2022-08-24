import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Program } from '@components/Program';
const ProgramContainer = ({ freeSoft }) => {
  const { id } = useParams();
  let item = freeSoft.filter((el) => el.id === Number(id));
  return <Program item={item} />;
};
const mapStateToProps = (state) => ({
  freeSoft: state.soft.freeSoft,
});
export default connect(mapStateToProps, {})(ProgramContainer);
