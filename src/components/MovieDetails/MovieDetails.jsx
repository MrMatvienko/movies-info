import { getMovieById } from 'API/API';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import {
  GoBack,
  List,
  PosterContainer,
  TitleInfo,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (error) {}
    };
    fetchMovieById();
  }, [movieId]);
  return (
    <>
      <GoBack>
        <Link to={backLinkHref}>Go back</Link>
      </GoBack>
      <PosterContainer>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : ''
            }
            alt="get"
            width={200}
            height={300}
          />
        </div>
        <div>
          <h1>{movie.original_title}</h1>
          <p>Rating: {Math.round(movie.vote_average)}/10</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {' '}
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </PosterContainer>
      <div>
        <TitleInfo>Additional information</TitleInfo>
        <List>
          <li>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </li>
        </List>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
