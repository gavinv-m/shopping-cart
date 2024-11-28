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
    <div className={styles.cartDropdown}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className={styles.cartItem}>
                <td>
                  <img src={item.src} alt={item.title}></img>
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td className={styles.quantityAmt}>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
                <td className={styles.deleteBtn}>
                  <button
                    aria-label={`Remove ${item.title} from cart`}
                    onClick={() => deleteItem(item.id)}
                  >
                    &#10005;
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6" className={styles.total}>
              Total: ${total}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const ProfileMenu = () => {
  return (
    <div className={styles.profileDropdown}>
      <h4>My Collection</h4>
      <ul>
        <li>Dashboard</li>
        <li>Orders</li>
        <li>Wishlist</li>
      </ul>
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
      <div className={styles.logoAndName}>
        <Link to="/">
          <CameraIcon />
          <h1>The Collection</h1>
        </Link>
      </div>
      <div className={styles.headerActions}>
        <Link to="/products">
          <span>Shop the Collection</span>
        </Link>
        <div className={styles.icons}>
          <div
            className={styles.cartDropdownWrapper}
            onMouseEnter={() => {
              handleMouseEnter('shoppingCart');
            }}
            onMouseLeave={handleMouseLeave}
          >
            <ShoppingCartIcon></ShoppingCartIcon>
            {activeHover === 'shoppingCart' && <CartItems></CartItems>}
          </div>
          <div
            className={styles.profileDropdownWrapper}
            onMouseEnter={() => {
              handleMouseEnter('profileAvatar');
            }}
            onMouseLeave={handleMouseLeave}
          >
            <ProfileIcon></ProfileIcon>
            {activeHover === 'profileAvatar' && <ProfileMenu></ProfileMenu>}
          </div>
        </div>
      </div>
    </header>
  );
}
