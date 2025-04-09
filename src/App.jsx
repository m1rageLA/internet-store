import { useState } from 'react'
import './App.css'
import Checkout from './Checkout.jsx'

function App() {
  const [product_sum, product_sum_set] = useState(0)

  return (
    <>
      <Checkout />
    </>
  )
}

export default App
