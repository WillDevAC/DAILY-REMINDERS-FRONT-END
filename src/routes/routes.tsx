import React from 'react';

import Home from '../pages/home'
import Auth from '../pages/auth'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} />
    </BrowserRouter>
  );
}

export default Routes;