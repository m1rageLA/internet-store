import { useState } from 'react'
import './App.css'
import Checkout from './Checkout.jsx'

function App() {
  const products = [
    {
      price: 99.99,
      title: 'Słuchawki',
      amount: 1,
      image: '',
    },
    {
      price: 149.99,
      title: 'Myszka gamingowa',
      amount: 1,
      image: '',
    },
    {
      price: 59.99,
      title: 'Kubek termiczny',
      amount: 2,
      image: '',
    },
  ];

  return (
    
      <Checkout products={products} />
    
  )
}

export default App
