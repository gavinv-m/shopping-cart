import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useFilms } from './titles';

// Exports to main.jsx
export default function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}
