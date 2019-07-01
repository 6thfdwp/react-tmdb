import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import MovieCard from './MovieCard';

const API_BASE_URL = `https://api.themoviedb.org/3`;
const fetchPopularMovie = async () => {
  const url = `${API_BASE_URL}/movie/popular/api_key=${k}&page=1`;
};
const fetchMovie = async id => {};
const searchMovie = async name => {};

// custom api hooks
const fetchReducer = (state, nextState) => {
  return { ...state, ...nextState };
};

const usePopularMovies = extra => {
  const initState = { pending: false, error: null, data: null };
  // next state
  const [state, setState] = useReducer(fetchReducer, initState);
  const url = `${API_BASE_URL}/popular/api_key=${k}&page=1`;
  const doFetch = async () => {
    setState({ pending: true, error: null });
    try {
      const resp = await axios.get(url);
      setState({ pending: false, data: resp.data });
    } catch (e) {
      // setState()
    }
  };

  useEffect(() => {
    doFetch();
  }, []);
  return [state];
};

const useSearchMoviesAPI = name => {
  const [kw, setKw] = useState('');
  const initState = { pending: false, error: null, data: null };
  const [state, setState] = useReducer(fetchReducer, initState);

  const url = `${API_BASE_URL}/search/movie?api_key=${k}&page=1&query={name}`;
  const doFetch = async () => {
    setState({ pending: true, error: null });
    try {
      const resp = await axios.get(url);
      setState({ pending: false, data: resp.data });
    } catch (e) {
      // setState()
    }
  };

  useEffect(() => {
    doFetch();
  }, [kw]);

  return [state, setKw];
};

function App() {
  const [{ pending, error, data }] = usePopularMovies();
  return (
    <div className="app-screen">
      <header className="app-header" />

      {/* <PopularMovies /> */}
      <div className="container">
        <div className="row">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}

export default App;
