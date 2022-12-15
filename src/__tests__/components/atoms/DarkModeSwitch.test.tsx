import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }))
});

import DarkModeSwitch from '../../../components/general/DarkModeSwitch';


describe('DarkModeSwitch Component', () => {
    it('renders a sun when in light mode', () => {
        Storage.prototype.getItem = jest.fn(() => 'light');
        
        render(<DarkModeSwitch />);

        expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
        expect(screen.queryByTestId('moon-icon')).not.toBeInTheDocument();

    });

    it('renders a moon when in dark mode', () => {
        Storage.prototype.getItem = jest.fn(() => 'dark');

        render(<DarkModeSwitch />);

        expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
        expect(screen.queryByTestId('sun-icon')).not.toBeInTheDocument();
    });

    it('allows user to switch modes when icon is clicked', async () => {
        const user = userEvent.setup();
        Storage.prototype.getItem = jest.fn(() => 'light');

        render(<DarkModeSwitch />);

        await user.click(screen.getByTestId('sun-icon'));

        expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
        expect(screen.queryByTestId('sun-icon')).not.toBeInTheDocument();
        expect(document.documentElement.classList.contains('dark')).toBe(true);

        await user.click(screen.getByTestId('moon-icon'));

        expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
        expect(screen.queryByTestId('moon-icon')).not.toBeInTheDocument();
        expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
});