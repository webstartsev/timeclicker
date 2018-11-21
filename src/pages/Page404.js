import React from 'react';
import { PageTemplate } from '../components/ui/PageTemplate/PageTemplate';
import PropTypes from 'prop-types';

export const Page404 = ({ location = {} }) => (
  <PageTemplate>
    <div className="page-404">
      <h1>{`Resource not found at '${location.pathname}'`}</h1>
    </div>
  </PageTemplate>
);

Page404.propTypes = {
  location: PropTypes.object
};
