import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

export const MainLayout = () => (
	<div className='flex flex-col min-h-screen bg-white'>
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer />
	</div>
);
