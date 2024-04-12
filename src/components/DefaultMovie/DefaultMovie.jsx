import defaultMovie from '../../assets/image/defaulmovie.jpg';

export const DefaultMovie = () => (
  <img
    src={defaultMovie}
    alt="poster"
    width={200}
    height={290}
    style={{ borderRadius: '20px' }}
  />
);
