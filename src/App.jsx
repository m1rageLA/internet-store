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
          <h1>Sklep z odzieżą sportową</h1>
          <nav>
            <h2>Kategorie</h2>
            {/* Kategorie, koszyk */}
            <ul>
              <div>Obuwie</div>
              <div>Spodnie</div>
              <div>Koszulki</div>
            </ul>
            <div>Koszyk</div>
          </nav>
        </header>
        <main>
          {/* Główna zawartość, produkty */}
          <h2>Produkty</h2>
        </main>
        <aside>
          {/* Menu boczne */}
        </aside>
        <footer>
          {/* Stopka */}
          <p>2025</p>
        </footer>
      </div>
    </>
  )
}

export default App
