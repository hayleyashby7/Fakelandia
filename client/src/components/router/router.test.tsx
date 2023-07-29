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

test('Router renders misdemeanor page', () => {
	//Arrange
	renderWithRouter(<Router />, { route: '/misdemeanours' });

	//Act
	const misdemeanorElement = screen.getByText(/Misdemeanour/i);

	//Assert
	expect(misdemeanorElement).toBeInTheDocument();
	expect(misdemeanorElement).toHaveTextContent('Misdemeanour');
});

test('Router renders not found page', () => {
	//Arrange
	renderWithRouter(<Router />, { route: '/bad-link' });

	//Act
	const notFoundHeading = screen.getByRole('heading');
	const notFoundText = screen.getByText(/Sorry/i);

	//Assert
	expect(notFoundHeading).toBeInTheDocument();
	expect(notFoundHeading).toHaveTextContent('404 - Not Found!');
	expect(notFoundText).toBeInTheDocument();
	expect(notFoundText).toHaveTextContent('Sorry, the page you are looking for does not exist.');
});
