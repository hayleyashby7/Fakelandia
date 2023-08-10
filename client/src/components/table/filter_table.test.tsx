import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Filter_Table from './filter_table';
import { MisdemeanourTableRow } from '../misdemeanour/misdemanour_list';
import UserEvent from '@testing-library/user-event';

const data: MisdemeanourTableRow[] = [
	{
		citizenId: 11276,
		misdemeanour: 'united',
		date: '30/07/2023',
		misdemeanourWithEmoji: 'Supporting Manchester United 😈',
		punishment: '"https://picsum.photos/100?random=188',
	},
	{
		citizenId: 11397,
		misdemeanour: 'vegetables',
		date: '30/07/2023',
		misdemeanourWithEmoji: 'Not Eating Your Vegetables 🗣',
		punishment: '"https://picsum.photos/100?random=188',
	},
	{
		citizenId: 9685,
		misdemeanour: 'rudeness',
		date: '30/07/2023',
		misdemeanourWithEmoji: 'Mild Public Rudeness 🤪',
		punishment: '"https://picsum.photos/100?random=188',
	},
	{
		citizenId: 19561,
		misdemeanour: 'lift',
		date: '30/07/2023',
		misdemeanourWithEmoji: 'Speaking in a Lift 🥗',
		punishment: '"https://picsum.photos/100?random=188',
	},
];

test('renders a table with a filter for misdemeanours', async () => {
	// Arrange
	render(<Filter_Table data={[]} />);

	// Act
	const filter = await screen.findByRole('combobox', { name: /filter by misdemeanour/i });
	const rudenessOption = await screen.findByRole('option', { name: 'rudeness' });
	const vegetableOption = await screen.findByRole('option', { name: 'vegetables' });
	const liftOption = await screen.findByRole('option', { name: 'lift' });
	const unitedOption = await screen.findByRole('option', { name: 'united' });

	// Assert
	expect(filter).toBeInTheDocument();
	expect(rudenessOption).toBeInTheDocument();
	expect(vegetableOption).toBeInTheDocument();
	expect(liftOption).toBeInTheDocument();
	expect(unitedOption).toBeInTheDocument();
});

test('table should display all misdemeanours by default', async () => {
	// Arrange

	render(<Filter_Table data={data} />);

	// Act
	const rudeness = await screen.findByText('Mild Public Rudeness 🤪');
	const vegetables = await screen.findByText('Not Eating Your Vegetables 🗣');
	const lift = await screen.findByText('Speaking in a Lift 🥗');
	const united = await screen.findByText('Supporting Manchester United 😈');

	// Assert
	expect(rudeness).toBeInTheDocument();
	expect(vegetables).toBeInTheDocument();
	expect(lift).toBeInTheDocument();
	expect(united).toBeInTheDocument();
});

test('table should display misdemeanours filtered by Mild Public Rudeness', async () => {
	// Arrange
	const user = UserEvent.setup();
	render(<Filter_Table data={data} />);

	// Act
	const filter = await screen.findByRole('combobox', { name: /filter by misdemeanour/i });
	const rudenessOption = await screen.findByRole('option', { name: 'rudeness' });
	await user.selectOptions(filter, 'rudeness');

	// Assert
	expect(filter).toBeInTheDocument();
	expect(rudenessOption).toBeInTheDocument();
	expect(await screen.findByText('Mild Public Rudeness 🤪')).toBeInTheDocument();
	expect(screen.queryByText('Not Eating Your Vegetables 🗣')).toBeNull();
	expect(screen.queryByText('Speaking in a Lift 🥗')).toBeNull();
	expect(screen.queryByText('Supporting Manchester United 😈')).toBeNull();
});

test('table should display misdemeanours filtered by Not Eating Your Vegetables', async () => {
	// Arrange
	const user = UserEvent.setup();
	render(<Filter_Table data={data} />);

	// Act
	const filter = await screen.findByRole('combobox', { name: /filter by misdemeanour/i });
	const vegetableOption = await screen.findByRole('option', { name: 'vegetables' });
	await user.selectOptions(filter, 'vegetables');

	// Assert
	expect(filter).toBeInTheDocument();
	expect(vegetableOption).toBeInTheDocument();
	expect(await screen.findByText('Not Eating Your Vegetables 🗣')).toBeInTheDocument();
	expect(screen.queryByText('Mild Public Rudeness 🤪')).toBeNull();
	expect(screen.queryByText('Speaking in a Lift 🥗')).toBeNull();
	expect(screen.queryByText('Supporting Manchester United 😈')).toBeNull();
});

test('table should display misdemeanours filtered by Speaking in a Lift', async () => {
	// Arrange
	const user = UserEvent.setup();
	render(<Filter_Table data={data} />);

	// Act
	const filter = await screen.findByRole('combobox', { name: /filter by misdemeanour/i });
	const liftOption = await screen.findByRole('option', { name: 'lift' });
	await user.selectOptions(filter, 'lift');

	// Assert
	expect(filter).toBeInTheDocument();
	expect(liftOption).toBeInTheDocument();
	expect(await screen.findByText('Speaking in a Lift 🥗')).toBeInTheDocument();
	expect(screen.queryByText('Mild Public Rudeness 🤪')).toBeNull();
	expect(screen.queryByText('Not Eating Your Vegetables 🗣')).toBeNull();
	expect(screen.queryByText('Supporting Manchester United 😈')).toBeNull();
});

test('table should display misdemeanours filtered by Supporting Manchester United', async () => {
	// Arrange
	const user = UserEvent.setup();
	render(<Filter_Table data={data} />);

	// Act
	const filter = await screen.findByRole('combobox', { name: /filter by misdemeanour/i });
	const unitedOption = await screen.findByRole('option', { name: 'united' });
	await user.selectOptions(filter, 'united');

	// Assert
	expect(filter).toBeInTheDocument();
	expect(unitedOption).toBeInTheDocument();
	expect(await screen.findByText('Supporting Manchester United 😈')).toBeInTheDocument();
	expect(screen.queryByText('Mild Public Rudeness 🤪')).toBeNull();
	expect(screen.queryByText('Not Eating Your Vegetables 🗣')).toBeNull();
	expect(screen.queryByText('Speaking in a Lift 🥗')).toBeNull();
});
