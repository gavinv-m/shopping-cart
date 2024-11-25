import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export const CartContext = createContext();

// Exports to main.jsx
export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <Outlet></Outlet>
      </CartContext.Provider>
    </>
  );
}
