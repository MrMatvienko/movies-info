import { getMovieById } from 'API/API';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AdditionalBlock,
  InfoBlock,
  List,
  PosterContainer,
  TitleInfo,
  WraperDetails,
} from './MovieDetails.styled';
import { styled } from 'styled-components';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 4px 16px;
  border-radius: 10px;
  background-color: #899599;
  font-weight: bold;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #49c2ee;
    color: white;
  }
  &.active {
    background-color: #98d3ec;
    color: white;
  }
`;

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
      <StyledNavLink
        style={{ color: 'white', textDecoration: 'none' }}
        to={backLinkHref}
      >
        Go back
      </StyledNavLink>

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
      <AdditionalBlock>
        <TitleInfo>Additional information</TitleInfo>
        <List>
          <li>
            <StyledNavLink to="cast" state={location.state}>
              Cast
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="reviews" state={location.state}>
              Reviews
            </StyledNavLink>
          </li>
        </List>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </AdditionalBlock>
    </WraperDetails>
  );
};
