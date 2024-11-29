import { useFilms } from './titles';
import Card from './Card';
import styles from './Grid.module.css';

// Exports to App.js
export default function Grid({}) {
  return (
    <section className={styles.productsGrid}>
      {useFilms().map((film, index) => (
        <Card key={film.id} film={film} />
      ))}
    </section>
  );
}
