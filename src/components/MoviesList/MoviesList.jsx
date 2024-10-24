import { Link, useLocation } from 'react-router-dom';
import { Item, List, OriginTitle, Image } from './MoviesList.styled';
import { DefaultMovie } from 'components/DefaultMovie/DefaultMovie';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <List>
        {movies.map(({ id, original_title, poster_path }) => (
          <Item key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt="poster"
                />
              ) : (
                <DefaultMovie />
              )}
              <OriginTitle>{original_title}</OriginTitle>
            </Link>
          </Item>
        ))}
      </List>
    </div>
  );
};
