import { useFilms } from './titles';
import Card from './Card';

// Exports to App.js
export default function Grid({}) {
  return (
    <section>
      {useFilms().map((film, index) => (
        <Card key={film.id} film={film} />
      ))}
    </section>
  );
}
