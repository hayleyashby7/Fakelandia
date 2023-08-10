import ConfessionForm from './confession_form';

export const Confession: React.FC = () => {
	return (
		<div className='flex flex-col m-4 gap-4'>
			<p>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>

			<p>However if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>

			<ConfessionForm />
		</div>
	);
};

export default Confession;
