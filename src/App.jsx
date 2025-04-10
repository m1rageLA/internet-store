import { useState } from 'react'
import './App.css'
import Checkout from './Checkout.jsx'

function App() {
  const products = [
    {
      price: 99.99,
      title: 'Słuchawki',
      description: 'Bezprzewodowe i wygodne.',
      category: 'Audio',
      image: '',
    },
    {
      price: 149.99,
      title: 'Myszka gamingowa',
      description: 'Szybka i precyzyjna.',
      category: 'Akcesoria',
      image: '',
    },
    {
      price: 59.99,
      title: 'Kubek termiczny',
      description: 'Idealny do kawy na wynos.',
      category: 'Dom',
      image: '',
    },
  ];

  return (
    
      <Checkout products={products} />
    
  )
}

export default App
