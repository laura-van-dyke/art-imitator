import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import About from './components/About';
import Paintings from './components/Paintings';
import Transformation from './components/Transformation';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            {' '}
            <Redirect to="/paintings" />{' '}
          </Route>
          <Route exact path="/paintings" component={Paintings} />
          <Route
            path="/paintings/:painting"
            render={(routeProps) => (
              <Transformation painting={routeProps.match.params.painting} />
            )}
          />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
