import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createEpicMiddleware } from 'redux-observable'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import rootEpic from './epics';
import rootReducer from './reducers';

import App from './components/app';

import Main from './containers/Main';

const epicMiddleware = createEpicMiddleware(rootEpic);
const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  epicMiddleware,
  loggerMiddleware
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
      <App>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
      </App>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();