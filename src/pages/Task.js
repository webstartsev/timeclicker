import React from 'react';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';
import PropTypes from 'prop-types';

import TaskDetail from '../containers/TaskDetail/TaskDetail';

export const Task = ({ match }) => {
  return (
    <PageTemplate>
      <TaskDetail match={match} />
    </PageTemplate>
  );
};

Task.propTypes = {
  match: PropTypes.object
};
