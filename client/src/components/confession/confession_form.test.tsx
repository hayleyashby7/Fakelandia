import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import ConfessionForm from './confession_form';

beforeEach(() => {
	jest.resetAllMocks();
});
test('should display error and not submit if blank subject', async () => {
	// Arrange
	const submitMock = jest.fn();
	const form = render(<ConfessionForm onSubmission={submitMock} />);
	const user = UserEvent.setup();

	// Act
	await user.click(form.getByRole('button', { name: /confess/i }));

	// Assert
	expect(await form.findByText(/subject is required/i)).toBeInTheDocument();
	expect(submitMock).not.toHaveBeenCalled();
});

test('should display error and not submit if blank reason', async () => {
	// Arrange
	const submitMock = jest.fn();
	const form = render(<ConfessionForm onSubmission={submitMock} />);
	const user = UserEvent.setup();

	// Act
	await user.click(form.getByRole('button', { name: /confess/i }));

	// Assert
	expect(await form.findByText(/reason is required/i)).toBeInTheDocument();
	expect(submitMock).not.toHaveBeenCalled();
});

test('should display error and not submit if blank details', async () => {
	// Arrange
	const submitMock = jest.fn();
	const form = render(<ConfessionForm onSubmission={submitMock} />);
	const user = UserEvent.setup();

	// Act
	await user.click(form.getByRole('button', { name: /confess/i }));

	// Assert
	expect(await form.findByText(/details should have/i)).toBeInTheDocument();
	expect(submitMock).not.toHaveBeenCalled();
});

test('should display error and not submit if details too short', async () => {
	// Arrange
	const submitMock = jest.fn();
	const form = render(<ConfessionForm onSubmission={submitMock} />);
	const user = UserEvent.setup();

	// Act
	await user.type(form.getByLabelText(/details/i), 'ab');
	await user.click(form.getByRole('button', { name: /confess/i }));

	// Assert
	expect(await form.findByText(/details should have/i)).toBeInTheDocument();
	expect(submitMock).not.toHaveBeenCalled();
});

test('should have no errors if form submitted with valid data', async () => {
	// Arrange
	const submitMock = jest.fn();
	const form = render(<ConfessionForm onSubmission={submitMock} />);
	const user = UserEvent.setup();

	// Act
	await user.type(form.getByRole('textbox', { name: /subject/i }), 'test subject');
	await user.selectOptions(form.getByRole('combobox', { name: /reason/i }), 'Mild Public Rudeness');
	await user.type(form.getByLabelText(/details/i), 'test details');
	await user.click(form.getByRole('button', { name: /confess/i }));

	// Assert
	expect(form.queryByText(/subject is required/i)).toBeNull();
	expect(form.queryByText(/reason is required/i)).toBeNull();
	expect(form.queryByText(/details should have/i)).toBeNull();
	expect(submitMock).toBeCalledTimes(1);
	expect(submitMock).toBeCalledWith({
		subject: 'test subject',
		reason: 'rudeness',
		details: 'test details',
	});
});
