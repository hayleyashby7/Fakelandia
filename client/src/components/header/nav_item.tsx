import { NavLink } from 'react-router-dom';

interface Nav_Item_Props {
	linkTo: string;
	text: string;
}

const Nav_Item: React.FC<Nav_Item_Props> = ({ linkTo, text }) => (
	<li>
		<NavLink to={linkTo} className={({ isActive }) => (isActive ? 'text-white' : 'text-gold')}>
			{text}
		</NavLink>
	</li>
);

export default Nav_Item;
