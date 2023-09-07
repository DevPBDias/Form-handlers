import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

test('Testar se o botão de retornar está na tela', () => {
  renderWithRouter(<App />, { route: '/home' });

  const btnBack = screen.getByRole('button', { name: 'Voltar menu inicial' });
  expect(btnBack).toBeInTheDocument();
});
