import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Paintings from './components/Paintings';
import Transformation from './components/Transformation';
import Test from './components/Test';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/paintings" component={Paintings} />
          <Route
            path="/paintings/:painting"
            render={(routeProps) => (
              <Transformation painting={routeProps.match.params.painting} />
            )}
          />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
