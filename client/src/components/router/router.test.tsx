import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';

test('Router defaults to homepage', () => {
	//Arrange
	render(<Router />, { wrapper: BrowserRouter });

	//Act
	const homeElement = screen.getByText(/Home/i);

	//Assert
	expect(homeElement).toBeInTheDocument();
	expect(homeElement).toHaveTextContent('Home');
});
