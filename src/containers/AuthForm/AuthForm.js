import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { singIn } from '../../store/actions/auth';

import AuthForm from '../../components/AuthForm/AuthForm';

const putStatetoProps = () => {
  // state
  return {};
};

const putActiontoProps = dispatch => {
  return {
    singIn: bindActionCreators(singIn, dispatch)
  };
};

export default connect(
  putStatetoProps,
  putActiontoProps
)(AuthForm);
