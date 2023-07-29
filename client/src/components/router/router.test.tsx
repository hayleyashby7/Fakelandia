import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Router from './router';
import { renderWithRouter } from '../../utils/testUtils';

test('Router defaults to homepage', () => {
	//Arrange
	renderWithRouter(<Router />);

	//Act
	const homeElement = screen.getByText(/Home/i);

	//Assert
	expect(homeElement).toBeInTheDocument();
	expect(homeElement).toHaveTextContent('Home');
});

test('Router renders confession page', () => {
	//Arrange
	renderWithRouter(<Router />, { route: '/confession' });

	//Act
	const confessionElement = screen.getByText(/Confession/i);

	//Assert
	expect(confessionElement).toBeInTheDocument();
	expect(confessionElement).toHaveTextContent('Confession');
});
