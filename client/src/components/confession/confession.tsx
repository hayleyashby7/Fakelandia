import ConfessionForm, { ConfessionFormData } from './confession_form';
import axios from 'axios';
import { useState } from 'react';

export const Confession: React.FC = () => {
	const [confessionError, setConfessionError] = useState<string | null>(null);

	const submitConfession = async (data: ConfessionFormData) => {
		try {
			const response = await axios.post('http://localhost:8080/api/confess', data);
			if (response.status !== 200) setConfessionError(response.data.message);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex flex-col m-4 gap-4'>
			<p>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>

			<p>However if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>

			<ConfessionForm onSubmission={submitConfession} />
			{confessionError && <p>{confessionError}</p>}
		</div>
	);
};

export default Confession;
