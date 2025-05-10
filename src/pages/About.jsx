// src/pages/About.jsx
import React from "react";
import "./About.css"; // styl opcjonalny

function About() {
  return (
    <div className="about-container">
      <h1>O nas</h1>
      <p>
        Witamy na stronie naszej firmy! Jesteśmy zespołem pasjonatów, którzy z zaangażowaniem tworzą nowoczesne rozwiązania internetowe.
      </p>
      <h2>Nasza misja</h2>
      <p>
        Naszym celem jest tworzenie produktów, które są użyteczne, estetyczne i dostępne dla każdego. Wierzymy, że technologia powinna ułatwiać życie – nie je komplikować.
      </p>
      <h2>Dlaczego my?</h2>
      <ul>
        <li>Doświadczenie i pasja</li>
        <li>Indywidualne podejście</li>
        <li>Wysoka jakość i estetyka</li>

        <h1>Zespół Krzna Wieczysta</h1>
        <li>Scrum Manager oraz Backend: <strong>Tymur Rozhkovskyi</strong></li>
        <li>Frontend Developer: <strong>Rafał Całuch</strong></li>
        <li>Frontend Developer: <strong>Alex Wróbel</strong></li>
        <li>Frontend Developer: <strong>Ruslan Shatkun</strong></li>
        <li>Frontend Developer: <strong>Yauheni Yelyashevich</strong></li>
        <li>Tester: <strong>Wojciech Maksymiuk</strong></li>
        
      </ul>
    </div>
  );
};

export default About;
