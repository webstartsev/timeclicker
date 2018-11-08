import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Page404 } from './pages/Page404';
import { Tasks } from './pages/Tasks';

ReactDOM.render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tasks" component={Tasks} />
        <Route component={Page404} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
