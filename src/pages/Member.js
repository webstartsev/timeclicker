import React from 'react';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';
import PropTypes from 'prop-types';

import MemberDetail from '../containers/MemberDetail/MemberDetail';
import CurrentTask from '../containers/CurrentTask/CurrentTask';

export const Member = ({ match }) => {
  return (
    <PageTemplate>
      <MemberDetail match={match} />
      <CurrentTask />
    </PageTemplate>
  );
};

Member.propTypes = {
  match: PropTypes.object
};
