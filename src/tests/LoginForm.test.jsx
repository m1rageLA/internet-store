import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, beforeEach, expect } from 'vitest';
import LoginForm from '../components/LoginForm';

vi.mock('firebase/auth', async (importOriginal) => {
  const mod = await importOriginal();
  return { ...mod, signInWithEmailAndPassword: vi.fn() };
});

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const mod = await importOriginal();
  return { ...mod, useNavigate: () => mockNavigate };
});

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  it('рендерит поля и кнопку', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Hasło/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Zaloguj się/i })).toBeInTheDocument();
  });

  it('логинится успешно', async () => {
    const { signInWithEmailAndPassword } = await import('firebase/auth');
    signInWithEmailAndPassword.mockResolvedValue({});

    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText(/Email/i),  { target: { value: 'carol@test.pl' } });
    fireEvent.change(screen.getByLabelText(/Hasło/i),  { target: { value: 'hunter2' } });
    fireEvent.click(screen.getByRole('button', { name: /Zaloguj się/i }));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith('Logowanie przebiegło pomyślnie!');
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  it('показывает ошибку при wrong-password', async () => {
    const { signInWithEmailAndPassword } = await import('firebase/auth');
    signInWithEmailAndPassword.mockRejectedValue(new Error('auth/wrong-password'));

    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText(/Email/i),  { target: { value: 'x@x.pl' } });
    fireEvent.change(screen.getByLabelText(/Hasło/i),  { target: { value: 'bad' } });
    fireEvent.click(screen.getByRole('button', { name: /Zaloguj się/i }));

    expect(await screen.findByText(/auth\/wrong-password/i)).toBeInTheDocument();
  });
});
