import { render, screen } from '@testing-library/react';
import AddTodo from './components/AddTodo';

test('renders learn react link', () => {
  render(<AddTodo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
