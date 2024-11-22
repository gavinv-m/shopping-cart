import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FilmsProvider } from './titles.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilmsProvider>
      <App />
    </FilmsProvider>
  </StrictMode>,
);
