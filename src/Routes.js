import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PopularScreen from './movie/PopularScreen';
import MovieDetailScreen from './movie/MovieDetailScreen';

export default () => (
  <Switch>
    <Route exact path="/" component={PopularScreen} />
    <Route path="/movie/:id" component={MovieDetailScreen} />
    <Route path="*" render={() => <h1>Path not found</h1>} />
  </Switch>
);
