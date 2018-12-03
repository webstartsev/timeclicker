import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer';
import initialState from './data/initialState';

import './index.css';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Page404 } from './pages/Page404';
import { Tasks } from './pages/Tasks';
import { Task } from './pages/Task';
import { Members } from './pages/Members';
import { Member } from './pages/Member';
import { Auth } from './pages/Auth';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const auth = false;

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      {auth ? (
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/tasks/:id/" component={Task} />
          <Route path="/tasks/" component={Tasks} />

          <Route path="/members/:id/" component={Member} />
          <Route path="/members/" component={Members} />

          <Route component={Page404} />
        </Switch>
      ) : (
        <Route exact path="/" component={Auth} />
      )}
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
