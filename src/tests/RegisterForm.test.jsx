import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, beforeEach, expect } from 'vitest';
import RegisterForm from '../components/RegisterForm';

/* ─────────── mock useNavigate ─────────── */
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const real = await importOriginal();
  return { ...real, useNavigate: () => mockNavigate };
});

/* ─────────── mock Firebase Auth ─────────── */
vi.mock('firebase/auth', async (importOriginal) => {
  const real = await importOriginal();

  const mockGetIdToken = vi.fn(() => Promise.resolve('fake-token'));
  const mockReload = vi.fn(() => Promise.resolve());

  return {
    ...real,
    getAuth: () => ({
      currentUser: {
        uid: 'uid-123',
        email: 'bob@test.pl',
        getIdToken: mockGetIdToken,
        reload: mockReload, // 👈 добавляем reload
      },
    }),
    createUserWithEmailAndPassword: vi.fn(() =>
      Promise.resolve({
        user: {
          uid: 'uid-123',
          email: 'bob@test.pl',
          getIdToken: mockGetIdToken,
          reload: mockReload, // 👈 если используется после регистрации
        },
      })
    ),
    updateProfile: vi.fn(() => Promise.resolve()),
  };
});


/* ─────────── tests ─────────── */
describe('RegisterForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(window, 'alert').mockImplementation(() => {}); // mock alert
  });

  it('рендерит все поля и кнопку', () => {
    render(<RegisterForm />);
    expect(screen.getByLabelText(/Pełne imię/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Hasło/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Potwierdź hasło/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Zarejestruj się/i })).toBeInTheDocument();
  });

  it('показывает ошибку, если пароли разные', () => {
    render(<RegisterForm />);
    fireEvent.change(screen.getByLabelText(/Pełne imię/i), { target: { value: 'Ala' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'a@a.pl' } });
    fireEvent.change(screen.getByLabelText(/^Hasło/i), { target: { value: '123' } });
    fireEvent.change(screen.getByLabelText(/Potwierdź hasło/i), {
      target: { value: '456' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Zarejestruj się/i }));

    expect(screen.getByText(/Hasła nie są takie same/i)).toBeInTheDocument();
  });

  it('вызывает Firebase и делает navigate при успехе', async () => {
    const { createUserWithEmailAndPassword, updateProfile } = await import('firebase/auth');

    render(<RegisterForm />);
    fireEvent.change(screen.getByLabelText(/Pełne imię/i), { target: { value: 'Bob' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'bob@test.pl' } });
    fireEvent.change(screen.getByLabelText(/^Hasło/i), { target: { value: 'tajne' } });
    fireEvent.change(screen.getByLabelText(/Potwierdź hasło/i), {
      target: { value: 'tajne' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Zarejestruj się/i }));

    await waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalled();
      expect(updateProfile).toHaveBeenCalledWith(expect.any(Object), {
        displayName: 'Bob',
      });
      expect(window.alert).toHaveBeenCalledWith('Rejestracja przebiegła pomyślnie!');
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
