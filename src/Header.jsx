import { useContext, useState } from 'react';
import CameraIcon from './icons/CameraIcon';
import ShoppingCartIcon from './icons/ShoppingCart';
import ProfileIcon from './icons/ProfileIcon';
import { Link } from 'react-router-dom';
import { CartContext } from './App';
import styles from './Header.module.css';

const CartItems = () => {
  const [cart, setCart] = useContext(CartContext);
  const total = cart.reduce((totalValue, currentItem) => {
    return (totalValue += currentItem.price * currentItem.quantity);
  }, 0);

  const deleteItem = (itemId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== itemId);
    });
  };

  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.src} style={{ width: 50, height: 50 }}></img>
            <span>{item.title}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
            <span>{item.price * item.quantity}</span>
            <button
              aria-label={`Remove ${item.title} from cart`}
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              &#10005;
            </button>
          </div>
        );
      })}
      <div>Total: ${total}</div>
    </div>
  );
};

const ProfileMenu = () => {
  return (
    <div>
      <h4>My Collection</h4>
      <span>Dashboard</span>
      <span>Orders</span>
      <span>Wishlist</span>
    </div>
  );
};

// Exports to App.jsx
export default function Header() {
  const [activeHover, setActiveHover] = useState(null);

  const handleMouseEnter = (icon) => {
    setActiveHover(icon);
  };

  const handleMouseLeave = () => {
    setActiveHover(null);
  };

  return (
    <header>
      <div className="icon-and-name">
        <Link to="/">
          <CameraIcon></CameraIcon>
        </Link>
        <h1>The Collection</h1>
      </div>
      <Link to="/products">
        <span>Shop the Collection</span>
      </Link>
      <div className="cart-and-profile">
        <div
          onMouseEnter={() => {
            handleMouseEnter('shoppingCart');
          }}
          onMouseLeave={handleMouseLeave}
        >
          <ShoppingCartIcon></ShoppingCartIcon>
        </div>
        <div
          onMouseEnter={() => {
            handleMouseEnter('profileAvatar');
          }}
          onMouseLeave={handleMouseLeave}
        >
          <ProfileIcon></ProfileIcon>
        </div>
      </div>
      {activeHover === 'shoppingCart' ? (
        <CartItems></CartItems>
      ) : activeHover === 'profileAvatar' ? (
        <ProfileMenu></ProfileMenu>
      ) : (
        activeHover
      )}
    </header>
  );
}
