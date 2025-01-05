import React, { useState, useEffect } from 'react';
import {
    Row,
    Col
  } from 'react-bootstrap';
import { useFetchMoviesQuery, useFetchDefaultMoviesQuery } from '../features/movies/moviesApi';
import PropTypes from 'prop-types';

export const MovieList = ({ searchQuery }) => {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
  
    const isSearchActive = Boolean(searchQuery);
  
    const { data: searchData, error: searchError, isFetching: searchFetching } =
      useFetchMoviesQuery({ query: searchQuery, page }, { skip: !isSearchActive });
  
    const { data: defaultData, error: defaultError, isFetching: defaultFetching } =
      useFetchDefaultMoviesQuery(page, { skip: isSearchActive });
  
    useEffect(() => {
      const data = isSearchActive ? searchData : defaultData;
  
      if (data && data.results) {
        setMovies((prevMovies) => (page === 1 ? data.results : [...prevMovies, ...data.results]));
      }
    }, [searchData, defaultData, page]);
  
    useEffect(() => {
      setMovies([]);
      setPage(1);
    }, [searchQuery]);
  
    const handleLoadMore = () => {
      if (!searchFetching && !defaultFetching) setPage((prev) => prev + 1);
    };

  return (
    <div>
      {(searchFetching || defaultFetching) && page === 1 && <p>Loading...</p>}
      {(searchError || defaultError) && <p>Error fetching data.</p>}

      <div className="movie-list">
      <Row>
        {movies?.map((movie) => (
             <Col key={movie.id} lg={3} md={4} sm={4} className='movie-item'>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
            </Col>
        ))}
          </Row>
      </div>

      {(isSearchActive ? searchData?.page < searchData?.total_pages : defaultData?.page < defaultData?.total_pages) &&
        !(searchFetching || defaultFetching) && (
          <button onClick={handleLoadMore} className="load-more-btn">
            Load More
          </button>
        )}
    </div>
  );
};

MovieList.propTypes = {
    searchQuery: PropTypes.string,
}

export default MovieList;