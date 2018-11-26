import React from 'react';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';

import MemberList from '../containers/MemberList/MemberList';

export const Members = () => {
  return (
    <PageTemplate>
      <MemberList />
    </PageTemplate>
  );
};
