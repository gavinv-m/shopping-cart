import CameraIcon from './icons/CameraIcon';
import ShoppingCartIcon from './icons/ShoppingCart';
import ProfileIcon from './icons/ProfileIcon';

// Exports to App.jsx
export default function Header() {
  return (
    <header>
      <div className="icon-and-name">
        <CameraIcon></CameraIcon>
        <h1>The Collection</h1>
      </div>
      <span>Shop the Collection</span>
      <div className="cart-and-profile">
        <ShoppingCartIcon></ShoppingCartIcon>
        <ProfileIcon></ProfileIcon>
      </div>
    </header>
  );
}
