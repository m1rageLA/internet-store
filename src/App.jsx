// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './components/Checkout';
import './App.css';
import About from './pages/About.jsx';
import { ThemeProvider } from '@mui/material';
import theme from './theme.js';
import AuthProvider from './AuthProvider.jsx';


export default function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            </Layout>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </CartProvider>
  );
}