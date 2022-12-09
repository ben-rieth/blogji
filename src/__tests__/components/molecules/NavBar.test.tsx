import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

import NavBar from "../../../components/molecules/NavBar";

describe('NavBar Component', () => {
    it('renders the name of the blog, a menu icon, a search icon, and the dark mode icon', () => {
        Storage.prototype.getItem = jest.fn(() => 'dark');
        
        render(<NavBar />);

        expect(screen.getByText("Benji's Blog")).toBeInTheDocument();
        expect(screen.getByTestId('search-icon')).toBeInTheDocument();
        expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
        expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
    })
});