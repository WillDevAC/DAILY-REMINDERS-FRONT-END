import React from 'react';

import Home from '../pages/home'
import Auth from '../pages/auth'
import Dashboard from '../pages/dashboard'
import Register from '../pages/register'

import { BrowserRouter, Route } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Dashboard} />
    </BrowserRouter>
  );
}

export default Routes;