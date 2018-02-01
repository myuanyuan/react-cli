import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { BaseTitle, Nav } from './components';
import { Home, Login } from './containers';


const Routes = ({ match }) => {
  return (
  <div>
    {
      match&&match.url ? (
        <div>
          <Switch>
            <Route exact path={`${match.url}/`} component={Home} />
            <Route exact path={`${match.url}/baseTitle`} component={BaseTitle} />
            <Route  path={`${match.url}/nav`} component={Nav} />
            <Route  path={`${match.url}/login`} component={Login} />
            <Route path="*" component={ Login } />
          </Switch>
        </div>) : (
          <div>
            <Switch>
              <Route exact path={`/`} component={Home} />
              <Route path="*" component={ Login } />
            </Switch>
          </div>
        )
    }
  </div>
)};
export default Routes;
