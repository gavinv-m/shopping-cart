import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import styles from './App.module.css';

export const CartContext = createContext([[], () => {}]); // Provide a default value

// Exports to main.jsx
export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className={styles.appLayout}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <Outlet></Outlet>
      </CartContext.Provider>
    </div>
  );
}
