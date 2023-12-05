import { Link, useLocation } from 'react-router-dom';
import { Item, List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <List>
        {movies.map(({ id, original_title }) => (
          <Item key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {original_title}
            </Link>
          </Item>
        ))}
      </List>
    </div>
  );
};
