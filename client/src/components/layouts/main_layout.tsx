import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

export const MainLayout = () => (
	<div className='flex flex-col min-h-screen bg-white'>
		<Header />
		<main className='p-6 flex-1'>
			<Outlet />
		</main>
		<Footer />
	</div>
);
