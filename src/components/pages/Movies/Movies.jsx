import { getMovieByQuery } from 'API/API';
import { FormSearch } from 'components/FormSearch/FormSearch';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Wraper } from './Movies.styled';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getMovieByQuery(currentQuery);
        setMovies(movieByQuery);
      } catch (e) {}
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <Wraper>
      <FormSearch setSearchParams={setSearchParams} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Wraper>
  );
};
