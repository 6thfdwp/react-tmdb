import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const API_BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `6ed12e064b90ae1290fa326ce9e790ff`;

// custom api hooks
const fetchReducer = (state, nextState) => {
  return { ...state, ...nextState };
};

const usePopularMovies = () => {
  // next state
  const [state, setState] = useReducer(fetchReducer, { pending: false, error: null, data: [] });

  useEffect(() => {
    const url = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`;
    const doFetch = async () => {
      setState({ pending: true, error: null });
      console.log(`[usePopularMovies] fetching..`);
      try {
        const resp = await axios.get(url);
        setState({ pending: false, data: resp.data.results });
        console.log(`[usePopularMovies] fetch done`);
      } catch (error) {
        setState({ pending: false, error });
        console.log(`[usePopularMovies] fetch error`);
      }
    };
    doFetch();
  }, []);

  return [state];
};

const useSearchMovies = queryName => {
  const [state, setState] = useReducer(fetchReducer, {
    pending: false,
    error: null,
    hits: []
  });
  useEffect(() => {
    const query = queryName.trim();
    const url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query=${query}`;
    const doFetch = async () => {
      setState({ pending: true, error: null });
      try {
        const resp = await axios.get(url);
        console.log(`[useSearchMovies] done: by name ${query}`);
        setState({ pending: false, hits: resp.data.results });
      } catch (error) {
        setState({ pending: false, error });
      }
    };

    if (queryName.trim()) {
      doFetch(queryName.trim());
    } else {
      setState({ pending: false, hits: [] });
    }
  }, [queryName]);

  return [state];
};

const useMovieDetail = id => {
  const [state, setState] = useReducer(fetchReducer, {
    pending: false,
    error: null,
    movie: null
  });
  useEffect(() => {
    const url = `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    const doFetch = async () => {
      setState({ pending: true, error: null });
      try {
        const resp = await axios.get(url);
        setState({ pending: false, movie: resp.data });
      } catch (error) {
        setState({ pending: false, error });
      }
    };

    doFetch();
  }, [id]);

  return [state];
};

export { usePopularMovies, useSearchMovies, useMovieDetail };
