import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RootPage from './RootPage';
import IkeaPage from './ikea';

const App = () => {
  return (
      <Switch>
          <Route component={RootPage} path="/" exact/>
          <Route component={IkeaPage} path="/ikea" exact/>
          <Redirect to="/"/>
      </Switch>
  );
}

export default App;
