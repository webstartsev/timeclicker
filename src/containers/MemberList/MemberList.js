import { connect } from 'react-redux';

import MemberList from '../../components/MemberList/MemberList';

const putStateToProps = state => {
  return {
    users: state.auth.users
  };
};

export default connect(putStateToProps)(MemberList);
