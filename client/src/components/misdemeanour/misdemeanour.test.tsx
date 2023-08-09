import { customRender as render } from '../../utils/testUtils';
import { screen } from '@testing-library/react';
import Misdemeanour from './misdemeanour';
import { randomPunishment } from '../../utils/punishments';

jest.mock('../../utils/punishments');

beforeEach(() => {
	jest.resetAllMocks();
});

test('requests data from server when rendered', async () => {
	// Arrange
	(randomPunishment as jest.Mock).mockReturnValue('https://picsum.photos/100?random=188');

	render(<Misdemeanour amount={1} />);

	// Act
	const misdemeanours = await screen.findByRole('table');

	// Assert
	expect(misdemeanours).toMatchInlineSnapshot(`
    <table
      class="shadow-none md:shadow-lg bg-white border-collapse my-4 mx-2"
    >
      <thead>
        <tr>
          <th
            class="bg-red text-white"
          >
            ID
          </th>
          <th
            class="bg-red text-white"
          >
            Date
          </th>
          <th
            class="bg-red text-white"
          >
            Misdemeanour
          </th>
          <th
            class="bg-red text-white"
          >
            Punishment
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            class="text-left"
          >
            15568
          </td>
          <td
            class="text-left"
          >
            29/07/2023
          </td>
          <td
            class="text-left"
          >
            Not Eating Your Vegetables 🗣
          </td>
          <td
            class="text-left"
          >
            <img
              alt="punishment"
              src="https://picsum.photos/100?random=188"
            />
          </td>
        </tr>
      </tbody>
    </table>
  `);
});

test('renders a message when no misdemeanours are returned', async () => {
	// Arrange
	render(<Misdemeanour amount={0} />);

	// Act
	const misdemeanours = await screen.findByText(/no misdemeanours/i);

	// Assert
	expect(misdemeanours.innerHTML).toEqual('No misdemeanours');
});
