import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

export const MainLayout = () => (
	<div className='flex flex-col min-h-screen w-screen bg-white'>
		<Header />
		<main className=' py-6 lg:px-8'>
			<Outlet />
		</main>
		<Footer />
	</div>
);
