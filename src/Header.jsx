import CameraIcon from './icons/CameraIcon';
import ShoppingCartIcon from './icons/ShoppingCart';
import ProfileIcon from './icons/ProfileIcon';
import { Link } from 'react-router-dom';

// Exports to App.jsx
export default function Header() {
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
        <ShoppingCartIcon></ShoppingCartIcon>
        <ProfileIcon></ProfileIcon>
      </div>
    </header>
  );
}
