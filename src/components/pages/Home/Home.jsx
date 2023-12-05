import { getTrendingMovies } from 'API/API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { Title } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
    </>
  );
};
