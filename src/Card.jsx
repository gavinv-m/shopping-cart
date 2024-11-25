import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './App';

// Exports to Grid
export default function Card({ film }) {
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
    <div>
      {/* TODO: Move styling to modules */}
      <img src={film.imgSrc} style={{ width: 250, height: 140 }}></img>
      <h4>{film.title}</h4>
      <p>{film.description}</p>
      <div>
        <span>{film.country}</span>
        <span>{film.year}</span>
      </div>
      <div>
        <div>
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
