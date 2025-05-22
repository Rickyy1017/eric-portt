import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { Toaster } from 'react-hot-toast';

function Main() {
  useEffect(() => {
    AOS.init({
      once:false
    });
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main /> 
    <Toaster/>
  </StrictMode>
);
