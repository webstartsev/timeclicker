import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Page404 } from '../../pages/Page404';
import { Tasks } from '../../pages/Tasks';
import { Task } from '../../pages/Task';
import { Members } from '../../pages/Members';
import { Member } from '../../pages/Member';
import { Auth } from '../../pages/Auth';

class App extends React.Component {
  render() {
    const { auth } = this.props;
    return (
      <HashRouter>
        {auth.user !== null ? (
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/tasks/:id/" component={Task} />
            <Route path="/tasks/" component={Tasks} />

            <Route path="/members/:id/" component={Member} />
            <Route path="/members/" component={Members} />

            <Route component={Page404} />
          </Switch>
        ) : (
          <Route component={Auth} />
        )}
      </HashRouter>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object
};

const putStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(putStateToProps)(App);
