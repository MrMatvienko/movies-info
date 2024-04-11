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
  InfoBlock,
  List,
  PosterContainer,
  TitleInfo,
  WraperDetails,
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
    <WraperDetails>
      <GoBack>
        <Link
          style={{ color: 'white', textDecoration: 'none' }}
          to={backLinkHref}
        >
          Go back
        </Link>
      </GoBack>
      <PosterContainer>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : ''
          }
          alt="poster"
          width={230}
          height={360}
          style={{ borderRadius: '20px' }}
        />
        <InfoBlock>
          <h1>{movie.original_title}</h1>
          <p>Rating: {Math.round(movie.vote_average)}/10</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </InfoBlock>
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
    </WraperDetails>
  );
};
