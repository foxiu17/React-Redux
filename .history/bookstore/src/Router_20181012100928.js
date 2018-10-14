import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;