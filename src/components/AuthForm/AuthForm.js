import React from 'react';
import PropTypes from 'prop-types';

import './AuthForm.css';

const AuthForm = ({ singIn = f => f }) => {
  return (
    <div className="AuthForm">
      <form className="AuthForm-form">
        <label htmlFor="" className="AuthForm-label">
          Войти с помощью:
        </label>
        <div className="AuthForm-sunginOther">
          <div
            className="AuthForm-enter AuthForm-enter_type_github"
            onClick={() => singIn('github')}
          />
          <div
            className="AuthForm-enter AuthForm-enter_type_twitter"
            onClick={() => singIn('twitter')}
          />
        </div>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  singIn: PropTypes.func
};

export default AuthForm;
