import { render, screen } from '@testing-library/react';
import { NoteApp } from '../components/NoteApp';

test('renders learn react link', () => {
    render(<NoteApp />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
})