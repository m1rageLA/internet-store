import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

// Мокаем useCart.js
vi.mock('../useCart', () => ({
  useCart: () => ({
    addToCart: vi.fn(),
  }),
}));


describe('Routing', () => {
  it('should render Home page on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /o nas/i })).toBeInTheDocument();
  });

  it('should render About page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /o nas/i })).toBeInTheDocument();
  });

  it('should render Contact page', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /kontakt/i })).toBeInTheDocument();
  });

  it('should render NotFound page on invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/some-invalid-page']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
  });
});
