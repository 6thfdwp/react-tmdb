import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSearchMovies } from '../api/movie';

function HitItemLink({ hit }) {
  return (
    <Link to={`/movie/${hit.id}`}>
      <div style={{ display: 'flex' }}>
        <i className="fa fa-film" />
        <li>{hit.title}</li>
      </div>
    </Link>
  );
}

function useDebounceQuery(queryword) {
  const [debouncedQuery, setDebouncedQuery] = useState(queryword);
  console.log(`[use debounced query] ${queryword}`);
  useEffect(() => {
    const tid = setTimeout(() => {
      console.log(`finally set debounced query...`);
      setDebouncedQuery(queryword);
    }, 300);

    return () => clearTimeout(tid);
  }, [queryword]);

  return debouncedQuery;
}

export default function SearchBox() {
  const [queryName, setQueryName] = useState('');
  const debouncedQuery = useDebounceQuery(queryName);
  // console.log(`trigger debouncedQuery ${debouncedQuery}`);

  const [{ pending: searchPending, error: searchError, hits }] = useSearchMovies(debouncedQuery);
  // console.log(`[SearchBox] rendered with ${queryName}`);

  const renderList = hits => {
    if (!hits.length) return null;
    return (
      <div className="search-box_result">
        <ul className="search-box_result_list">
          {hits.map(hit => (
            <HitItemLink key={hit.id} hit={hit} />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="search-box">
      <input
        className="search-input"
        placeholder="Search"
        value={queryName}
        onChange={e => setQueryName(e.target.value)}
      />
      <button className="search-box_icon">
        <i className="fa fa-search" style={{ fontSize: 18 }} />
      </button>
      {/* {searchPending && <span style={{ color: 'white' }}>Searching...</span>} */}
      {renderList(hits)}
    </div>
  );
}
