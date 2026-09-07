import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./API/Comment', () => ({
  __esModule: true,
  default: {
    get: () => Promise.resolve({ data: [] }),
    post: jest.fn(),
    delete: jest.fn(),
  },
}));

test('renders the feedback form', async () => {
  render(<App />);
  expect(await screen.findByRole('heading', { name: 'Feedback Form' })).toBeInTheDocument();
});
