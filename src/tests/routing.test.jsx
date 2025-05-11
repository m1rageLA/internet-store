// src/tests/routing.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

// Mock your cart hook so Home renders without errors
vi.mock('../useCart', () => ({
  useCart: () => ({ addToCart: vi.fn() }),
}));

describe('Routing', () => {
  it('renders Home page on `/`', () => {
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
    // Your Home page shows the filters
    expect(screen.getByText(/Zakres cenowy/i)).toBeInTheDocument();
    expect(screen.getByText(/Kategorie/i)).toBeInTheDocument();
  });

  it('renders About page on `/about`', () => {
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
    expect(screen.getByText(/O nas/i)).toBeInTheDocument();
  });

  it('renders Contact page on `/contact`', () => {
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
    expect(screen.getByRole('heading', { name: /Kontakt/i })).toBeInTheDocument();
  });

  it('renders 404 on unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/no-such']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
