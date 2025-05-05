// App.jsx
import { useState } from 'react';
import React from "react";
import Header from "./components/Header.jsx";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import About from './pages/About.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Strona Główna</h2>;
}

function About() {
  return <h2>O nas</h2>;
}

function Contact() {
  return (
    <div className="contact-page">
      <h2>Kontakt</h2>
      <p>Masz pytania? Skontaktuj się z nami!</p>

      <ul>
        <li>Email: kontakt@firma.pl</li>
        <li>Telefon: +48 123 456 789</li>
      </ul>

      <form className="contact-form">
        <input type="text" placeholder="Imię" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Twoja wiadomość..." required></textarea>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
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
      </div>
    </Router>
  );
}

export default App;