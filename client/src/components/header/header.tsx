import Nav from './nav';

const Header: React.FC = () => (
	<header className='bg-red text-white font-bold w-screen flex flex-col sm:flex-row'>
		<h1 className='text-center md:text-left'>Fakelandia Justice Department</h1>
		<Nav />
	</header>
);
export default Header;
