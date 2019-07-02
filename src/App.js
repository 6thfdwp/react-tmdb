import React, { useState, useEffect, useReducer } from 'react';

import './App.css';

// import MovieCard from './MovieCard';
import Routes from './Routes';

// custom api hooks
// const fetchReducer = (state, nextState) => {
//   return { ...state, ...nextState };
// };

// const usePopularMovies = extra => {
//   // const initState = { pending: false, error: null, data: null };
//   // next state
//   const [state, setState] = useReducer(fetchReducer, { pending: false, error: null, data: [] });

//   useEffect(() => {
//     const url = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`;
//     const doFetch = async () => {
//       setState({ pending: true, error: null });
//       console.log(`[usePopularMovies] fetching..`);
//       try {
//         const resp = await axios.get(url);
//         setState({ pending: false, data: resp.data.results });
//         console.log(`[usePopularMovies] fetch done`);
//       } catch (error) {
//         setState({ pending: false, error });
//         console.log(`[usePopularMovies] fetch error`);
//       }
//     };
//     doFetch();
//   }, []);
//   // state.data.result
//   return [state];
// };

// const useSearchMovies = queryName => {
//   const [state, setState] = useReducer(fetchReducer, {
//     pending: false,
//     error: null,
//     hits: []
//   });
//   useEffect(() => {
//     const query = queryName.trim();
//     const url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query=${query}`;
//     const doFetch = async () => {
//       setState({ pending: true, error: null });
//       try {
//         const resp = await axios.get(url);
//         console.log(`[useSearchMovies] by name ${query}`);
//         setState({ pending: false, hits: resp.data.results });
//       } catch (error) {
//         //
//       }
//     };

//     if (queryName.trim()) {
//       doFetch(queryName.trim());
//     } else {
//       setState({ pending: false, hits: [] });
//     }
//   }, [queryName]);

//   return [state];
// };

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
