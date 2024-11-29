import { useState, useContext } from 'react';
import { CartContext } from './App';
import styles from './Card.module.css';

// Exports to Grid
export default function Card({ film }) {
  const price = 39.99;
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === film.id);

      if (itemIndex !== -1) {
        // If item exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[itemIndex] = {
          id: film.id,
          src: film.imgSrc,
          quantity: quantity,
          title: film.title,
          price: price,
        };
        return updatedCart;
      } else {
        // If item doesn't exist, add it to the cart
        return [
          ...prevCart,
          {
            id: film.id,
            src: film.imgSrc,
            quantity: quantity,
            title: film.title,
            price: price,
          },
        ];
      }
    });
  };

  const updateQuantity = (buttonType) => {
    setQuantity((previousValue) => {
      if (buttonType === 'increase') {
        return previousValue + 1;
      } else if (previousValue > 0) {
        return previousValue - 1;
      }
      return previousValue;
    });
  };

  return (
    <div className={styles.card}>
      {/* TODO: Move styling to modules */}
      <img src={film.imgSrc}></img>
      <h4>{film.title}</h4>
      <p className={styles.excerpt}>{film.description}</p>
      <div className={styles.filmDetails}>
        <span className={styles.filmCountry}>{film.country}, </span>
        <span className={styles.filmYear}> {film.year}</span>
      </div>
      <div className={styles.quantityControls}>
        <div className={styles.quantityBtns}>
          <button
            aria-label="Decrease quantity"
            type="button"
            onClick={() => updateQuantity('decrease')}
          >
            &#x2212;
          </button>
          <span>{quantity}</span>
          <button
            aria-label="Increase quantity"
            type="button"
            onClick={() => updateQuantity('increase')}
          >
            &#x2B;
          </button>
        </div>
        <button
          className={styles.addToCartBtn}
          type="button"
          aria-label="Add current item to cart"
          onClick={() => {
            addToCart();
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
