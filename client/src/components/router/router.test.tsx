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
