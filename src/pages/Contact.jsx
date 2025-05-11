// pages/Contact.jsx
import React from 'react';
import '../styles/contact.css'; // Import CSS for styling

export default function Contact() {
  return (
    <div className="contact-page">
      <h2>Kontakt</h2>
      <p>Masz pytania? Skontaktuj się z nami!</p>


        <li>Email: kontakt@firma.pl</li>
        <li>Telefon: +48 123 456 789</li>


      <form className="contact-form">
        <input type="text" placeholder="Imię" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Twoja wiadomość..." required />
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}
