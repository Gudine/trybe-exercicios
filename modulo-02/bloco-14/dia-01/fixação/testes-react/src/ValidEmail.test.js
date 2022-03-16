import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email ainda não tenha sido enviado.', () => {
  const EMAIL_USER = '';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.queryByTestId('id-email-is-valid');
  expect(isValid).not.toBeInTheDocument();
});

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  expect(isValid.style.color).toBe('green');
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
  expect(isValid.style.color).toBe('red');
});
