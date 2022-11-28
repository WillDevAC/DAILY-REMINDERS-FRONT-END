import React from 'react';

import Home from '../pages/home'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default Routes;