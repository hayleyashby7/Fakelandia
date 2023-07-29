import Nav_Item from './nav_item';

const Nav: React.FC = () => (
	<nav className='flex flex-grow items-center w-full'>
		<ul className='flex flex-row justify-evenly w-full'>
			<Nav_Item linkTo='/' text='Home' />
			<Nav_Item linkTo='/misdemeanours' text='Misdemeanours' />
			<Nav_Item linkTo='/confession' text='Confess To Us' />
		</ul>
	</nav>
);

export default Nav;
