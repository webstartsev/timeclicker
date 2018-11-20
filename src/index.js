import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import initialState from './data/initialState';

import './index.css';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Page404 } from './pages/Page404';
import { Tasks } from './pages/Tasks';

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tasks" component={Tasks} />
          <Route component={Page404} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
