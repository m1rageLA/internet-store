import { useState } from 'react';
import React from "react";
import Header from "./components/Header.jsx";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import SidePanel from './SidePanel.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './Counter.jsx';

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
function Home() {
  return <h2>Strona Główna</h2>;
}

function About() {
  return <h2>O nas</h2>;
}

function Contact() {
  return <h2>Kontakt</h2>;
}

function NotFound() {
  return <h2>404 - Strona nie znaleziona</h2>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <header>
          <h1>Sklep z odzieżą sportową</h1>
          //----------------
           <Header />
        <nav className="navbar">
          <Link to="/">Strona Główna</Link>
          <Link to="/about">O nas</Link>
          <Link to="/contact">Kontakt</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <main>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </main>

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Counter /> {/* Licznik */}
          //----------------
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
          <SidePanel />
        </aside>
        <footer>
          {/* Stopka */}
          <p>2025</p>
        </footer>
      </div>
    </>
  )
}
