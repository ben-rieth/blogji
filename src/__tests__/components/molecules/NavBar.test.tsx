import NavBar from "../../../components/molecules/NavBar";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('NavBar Component', () => {
    it('renders the name of the blog, a menu icon, and a search icon', () => {
        render(<NavBar />);

        expect(screen.getByText('Blogji')).toBeInTheDocument();
        expect(screen.getByTestId('search-icon')).toBeInTheDocument();
        expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
    })
});