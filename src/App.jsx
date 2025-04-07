import React from 'react';
import { Box } from '@mui/material';
import ProductCard from './components/ProductCard';
import './App.css'

function App() {
  const product = {
    price: 149.99,
    title: 'Myszka bezprzewodowa',
    description: 'Ergonomiczna i precyzyjna.',
    category: 'Elektronika',
    image: '', // залиш пустим для placeholder
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <ProductCard {...product} />
    </Box>
  );
}

export default App
