import { useState } from 'react';
import { MisdemeanourKind, JustTalk } from '../../types/misdemeanours.types';
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';

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
	details: string;
}

interface InputProps {
	label: string;
	name: Path<ConfessionFormData>;
	register: UseFormRegister<ConfessionFormData>;
	required: boolean;
}

interface SelectProps extends InputProps {
	options: Reason[];
}

interface DetailsProps {
	name: Path<ConfessionFormData>;
	register: UseFormRegister<ConfessionFormData>;
}

const Input = ({ label, name, register, required }: InputProps) => {
	return (
		<div className='flex justify-end gap-2'>
			<label htmlFor={name}>{label}</label>
			<input className='border' {...register(name, { required })} />
		</div>
	);
};

const Select = ({ label, name, register, required, options }: SelectProps) => {
	return (
		<div className='flex justify-end gap-2'>
			<label htmlFor={name}>{label}</label>
			<select className='border' {...register(name, { required })}>
				<option value=''>Select a reason</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

const Details = ({ name, register }: DetailsProps) => {
	return (
		<div>
			<textarea className='border w-full h-20' {...register(name)} />
		</div>
	);
};

const Submit = () => {
	return (
		<div className='flex justify-center'>
			<button className='border w-fit py-2 px-6' type='submit'>
				Confess
			</button>
		</div>
	);
};

export const ConfessionForm: React.FC = () => {
	const [reasons] = useState<Reason[]>(Object.values(REASONS));
	const { register, handleSubmit } = useForm<ConfessionFormData>();

	const onSubmit: SubmitHandler<ConfessionFormData> = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-2  my-4 gap-4 border-2 border-red rounded-md'>
			<Input label='Subject' name='subject' register={register} required={true} />
			<Select label='Reason' name='reason' register={register} required={true} options={reasons} />
			<Details name='details' register={register} />
			<Submit />
		</form>
	);
};

export default ConfessionForm;
