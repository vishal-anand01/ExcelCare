import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './router/AppRouter';
import './assets/style/site.css';
import './heroUnderlineAnimation';

createRoot(document.getElementById('root')).render(
  <StrictMode><AppRouter /></StrictMode>,
);
