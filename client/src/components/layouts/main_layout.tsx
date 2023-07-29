import { Outlet } from 'react-router-dom';
import Header from '../header/header';

export const MainLayout = () => (
	<>
		<Header />
		<main className='p-6' style={{ flex: '1' }}>
			<Outlet />
		</main>
	</>
);
