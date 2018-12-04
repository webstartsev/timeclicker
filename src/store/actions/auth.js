import C from '../../helpers/constants';
import AuthService from '../../services/OAuth';

export const singIn = method => async dispatch => {
  const onRequest = method => {
    dispatch({
      type: C.SIGN_IN_REQUEST,
      payload: {
        method
      }
    });
  };

  const onSuccess = (method, user) => {
    dispatch({
      type: C.SIGN_IN_SUCCESS,
      payload: {
        method,
        user: {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          role: ''
        }
      }
    });
  };
  const onError = (method, error) => {
    dispatch({
      type: C.SIGN_IN_ERROR,
      payload: {
        method,
        error
      }
    });
  };

  onRequest(method);
  try {
    const user = await AuthService.singInGitHub();
    return onSuccess(method, user);
  } catch (error) {
    return onError(method, error);
  }
};
