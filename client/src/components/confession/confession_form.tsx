import { useState } from 'react';
import { MisdemeanourKind, JustTalk } from '../../types/misdemeanours.types';

enum REASONS {
	'just-talk' = 'Just Talk',
	rudeness = 'Mild Public Rudeness',
	vegetables = 'Not Eating Your Vegetables',
	lift = 'Speaking in a Lift',
	united = 'Supporting Manchester United',
}

type Reason = (typeof REASONS)[MisdemeanourKind | JustTalk];

interface ConfessionFormData {
	subject: string;
	reason: Reason | null;
	message: string;
}

const ConfessionForm: React.FC = () => {
	const [reasons] = useState<Reason[]>(Object.values(REASONS));
	const [inputs, setInputs] = useState<ConfessionFormData>({ subject: '', reason: null, message: '' });

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(event);
		console.log(inputs);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputs((inputs) => ({ ...inputs, [event.target.name]: event.target.value }));
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col p-2  my-4 gap-4 border-2 border-red rounded-md'>
			<div className='flex justify-end gap-2'>
				<label htmlFor='subject'>Subject</label>
				<input className='border' name='subject' type='text' onChange={handleChange} />
			</div>
			<div className='flex justify-end gap-2'>
				<label htmlFor='reason'>Reason for contact</label>
				<select className='border' name='reason' onChange={handleChange}>
					<option value=''>Select a reason</option>
					{reasons.map((reason) => (
						<option key={reason} value={reason}>
							{reason}
						</option>
					))}
				</select>
			</div>
			<div>
				<textarea className='border w-full h-20' name='message' onChange={handleChange} />
			</div>
			<div className='flex justify-center'>
				<button className='border w-fit py-2 px-6' type='submit'>
					Confess
				</button>
			</div>
		</form>
	);
};

export default ConfessionForm;
