import React, { useState, useEffect, useReducer } from 'react';

import './assets/App.css';
import Routes from './Routes';

export default function App() {
  // const [{ pending, error, data }] = usePopularMovies();
  // const [queryName, setQueryName] = useState('');
  // const [{ pending: searchPending, error: searchError, hits }] = useSearchMovies(queryName);

  return (
    <div className="app-screen">
      <Routes />
    </div>
  );
}
