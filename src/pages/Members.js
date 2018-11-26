import React from 'react';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';
import PropTypes from 'prop-types';

import MemberList from '../containers/MemberList/MemberList';

export const Members = () => {
  return (
    <PageTemplate>
      <MemberList />
    </PageTemplate>
  );
};

Members.propTypes = {
  match: PropTypes.object
};
