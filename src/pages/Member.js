import React from 'react';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';
import PropTypes from 'prop-types';

import MemberDetail from '../containers/MemberDetail/MemberDetail';

export const Member = ({ match }) => (
  <PageTemplate>
    <MemberDetail match={match} />
  </PageTemplate>
);

Member.propTypes = {
  match: PropTypes.object
};
