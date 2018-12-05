import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../../components/App/App';

import { initState } from '../../store/actions/init';

const putStateToProps = state => {
  return {
    auth: state.auth
  };
};

const putActiontoProps = dispatch => {
  return {
    initState: bindActionCreators(initState, dispatch)
  };
};

export default connect(
  putStateToProps,
  putActiontoProps
)(App);
