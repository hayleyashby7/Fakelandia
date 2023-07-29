import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

export const MainLayout = () => (
	<div className='main'>
		<Header />
		<main className='p-6 main__content'>
			<Outlet />
		</main>
		<Footer />
	</div>
);
