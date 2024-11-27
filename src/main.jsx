import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FilmsProvider } from './titles.jsx';
import routes from './routes.jsx';
import './index.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilmsProvider>
      <RouterProvider router={router}></RouterProvider>
    </FilmsProvider>
  </StrictMode>,
);
