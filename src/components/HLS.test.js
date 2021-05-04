import { render, screen } from '@testing-library/react';
import { HLS } from './HLS';

test('renders LSS identifier link', () => {
  render(<HLS />);
  const shipIdent = screen.getByText(/yawning angel/i);
  expect(shipIdent).toBeInTheDocument();
});
