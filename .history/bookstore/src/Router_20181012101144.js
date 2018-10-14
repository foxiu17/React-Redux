import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPanel from './Components/AdminPanel/AdminPanel';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/admin" component={AdminPanel} />
          <Route component={PageNon}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;