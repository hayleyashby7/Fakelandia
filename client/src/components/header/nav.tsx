import { NavLink } from 'react-router-dom';

const Nav = () => (
	<nav className='flex flex-grow items-center w-full'>
		<ul className='flex flex-row justify-evenly w-full'>
			<li>
				<NavLink className='text-gold' to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink className='text-gold' to='/misdemeanours'>
					Misdemeanours
				</NavLink>
			</li>
			<li>
				<NavLink className='text-gold' to='/confession'>
					Confess To Us
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Nav;
