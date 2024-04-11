import { getTrendingMovies } from 'API/API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { HomeWraper, Title } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <HomeWraper>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
    </HomeWraper>
  );
};
