import { connect } from 'react-redux';

import MemberShort from '../../components/MemberShort/MemberShort';

const putStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(putStateToProps)(MemberShort);
