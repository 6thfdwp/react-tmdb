import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import './App.css';

import MovieCard from './MovieCard';

const API_BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `6ed12e064b90ae1290fa326ce9e790ff`;

// custom api hooks
const fetchReducer = (state, nextState) => {
  return { ...state, ...nextState };
};

const usePopularMovies = extra => {
  // const initState = { pending: false, error: null, data: null };
  // next state
  const [state, setState] = useReducer(fetchReducer, { pending: false, error: null, data: null });

  useEffect(() => {
    const url = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`;
    const doFetch = async () => {
      setState({ pending: true, error: null });
      try {
        const resp = await axios.get(url);
        setState({ pending: false, data: resp.data });
      } catch (error) {
        setState({ pending: false, error });
      }
    };
    doFetch();
  }, []);
  return [state];
};

// const useSearchMovies = queryName => {
// const [queryInput, setQueryInput] = useState('');
//   const initState = { pending: false, error: null, data: [] };
//   const [state, setState] = useReducer(fetchReducer, initState);
//   const url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query={name}`;
//   const doFetch = async () => {
//     setState({ pending: true, error: null });
//     try {
//       const resp = await axios.get(url);
//       setState({ pending: false, data: resp.data });
//     } catch (e) {
//       // setState()
//     }
//   };

//   useEffect(() => {
//     doFetch();
//   }, [queryName]);

//   return [state, setKw];
// };

function App() {
  const [{ pending, error, data }] = usePopularMovies();
  console.log('usePopularMovies');
  console.log({ pending, error, data });

  const [queryName, setQueryName] = useState('');
  return (
    <div className="app-screen">
      <header className="app-header">
        <input
          className="search-input"
          value={queryName}
          onChange={e => setQueryName(e.target.valeu)}
        />
      </header>

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
