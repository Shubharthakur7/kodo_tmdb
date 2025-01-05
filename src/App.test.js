import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock("./components/MovieList", () => {
  return jest.fn(() => <div>mock movie list</div>)
});

jest.mock("./components/SearchBar", () => {
  return jest.fn(() => <div>mock SearchBar</div>)
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
