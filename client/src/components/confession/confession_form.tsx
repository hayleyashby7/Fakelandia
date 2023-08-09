import { useState } from 'react';
import { MisdemeanourKind, JustTalk } from '../../types/misdemeanours.types';
import { useForm } from 'react-hook-form';

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
	reason: Reason;
	message: string;
}

const ConfessionForm: React.FC = () => {
	const [reasons] = useState<Reason[]>(Object.values(REASONS));
	const {
		register,
		handleSubmit,
    } = useForm<ConfessionFormData>();
    
	const onSubmit = (data: ConfessionFormData) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor='subject'>Subject</label>
			<input {...register("subject")} />
			<label htmlFor='reason'>Reason for contact</label>
			<select {...register("reason")}>
				{reasons.map((reason) => (
					<option key={reason} value={reason}>
						{reason}
					</option>
				))}
			</select>
            <textarea {...register("message")}} />
			<button type='submit'>Confess</button>
		</form>
	);
};

export default ConfessionForm;
