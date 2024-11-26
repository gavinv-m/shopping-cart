import Grid from './Grid';
import { useFilms } from './titles';

// Exports to routes.jsx
export default function Products() {
  const backdrops = useFilms().map((film) => {
    return { src: film.backdropImgSrc, id: film.id };
  });

  return (
    <div>
      <div>
        {backdrops.map((backdrop) => {
          return (
            <img
              src={backdrop.src}
              alt="Movie backdrop poster"
              key={backdrop.id}
            ></img>
          );
        })}
      </div>
      <Grid></Grid>
    </div>
  );
}
