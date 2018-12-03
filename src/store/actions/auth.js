import C from '../../helpers/constants';
import AuthService from '../../services/OAuth';

export const singIn = method => {
  let user;
  switch (method) {
    case 'github':
      user = AuthService.singInGitHub();
  }

  console.log('user: ', user);
  return {
    type: C.AUTH,
    payload: {}
  };
};
