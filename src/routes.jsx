import { element } from 'prop-types';
import App from './App';
import Homepage from './Homepage';
import Products from './Products';

const routes = [
  {
    path: '/',
    element: <App></App>,
    children: [
      { index: true, element: <Homepage></Homepage> },
      { path: 'products', element: <Products></Products> },
    ],
  },
];

export default routes;
