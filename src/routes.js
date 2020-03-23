import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/main" component={Main} />
    </Switch>
  );
}
