import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Link, Switch } from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import store, { history } from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import './style/main.css'
import { App, Login } from './containers'

const target = document.querySelector('#root');

ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/login.html" component={ Login } />
          <Route path="/home" component={ App } />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
