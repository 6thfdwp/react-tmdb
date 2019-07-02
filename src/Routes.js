import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PopularScreen from './movie/PopularScreen';
import MovieDetailScreen from './movie/MovieDetailScreen';

export default () => (
  <Switch>
    <Route path="/" component={PopularScreen} />
    {/* <Route path='/' component={MovieDetailScreen} /> */}
  </Switch>
);
