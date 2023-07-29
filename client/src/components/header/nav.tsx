import { NavLink } from 'react-router-dom';

const Nav = () => (
	<nav className='flex flex-grow items-center w-full'>
		<ul className='flex flex-row justify-evenly w-full'>
			<li>
				<NavLink to='/' className={({ isActive }) => (isActive ? 'text-white' : 'text-gold')}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to='/misdemeanours' className={({ isActive }) => (isActive ? 'text-white' : 'text-gold')}>
					Misdemeanours
				</NavLink>
			</li>
			<li>
				<NavLink to='/confession' className={({ isActive }) => (isActive ? 'text-white' : 'text-gold')}>
					Confess To Us
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Nav;
