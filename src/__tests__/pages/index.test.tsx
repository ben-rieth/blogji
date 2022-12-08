import Home from './../../pages/index';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe("Home Page", () => {
    it("renders text", () => {
        render(<Home />);

        expect(screen.getByText("Blogji Begins")).toBeInTheDocument();
        expect(screen.getByText("Subtitle")).toBeInTheDocument();
    });
});