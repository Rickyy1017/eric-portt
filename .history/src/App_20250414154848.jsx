import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import AppLayout from './utils/AppLayout'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'

function App() {

const  ScrollToTopOnRouteChange =()=> {
  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToTop();
  }, [location]);

  return null; 
}

export default App;
