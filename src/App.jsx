// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Checkout from './components/Checkout';
import './App.css';
import About from './pages/About.jsx';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}
