import { connect } from 'react-redux';
import App from '../../components/App/App';

const putStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(putStateToProps)(App);
