import React from 'react';
import { createRoot } from "react-dom/client";

import './index.css';
import App from './components/App';

// Suppress specific console warnings
const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('document.write')) {
    return;
  }
  originalConsoleWarn.apply(console, args);
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
