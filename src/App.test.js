import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio brand', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/HECTOR_MBAKAMA/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
