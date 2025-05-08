import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with navigation', () => {
    render(<App />);
    expect(screen.getByText(/flag explorer/i)).toBeInTheDocument();
});