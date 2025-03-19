import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div>
        <header>
          <h1>Sports Clothing Store</h1>
          <nav>
            {/* Kategorie, koszyk */}
          </nav>
        </header>
        <main>
          {/* Główna zawartość, produkty */}
        </main>
        <aside>
          {/* Menu boczne */}
        </aside>
        <footer>
          {/* Stopka */}
        </footer>
      </div>
    </>
  )
}

export default App
