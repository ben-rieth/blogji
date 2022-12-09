import Hero from './../../../components/molecules/Hero';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Hero Component', () => {
    it('lists the blog name and a subtitle', () => {
        render(<Hero />);

        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.getByText('A collection of my latest thoughts')).toBeInTheDocument();
    });
});