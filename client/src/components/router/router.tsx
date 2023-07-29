import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/main_layout';
import Home from '../home/home';
import Confession from '../confession/confession';
import Misdemeanour from '../misdemeanour/misdemeanour';
import NotFound from '../not_found/not_found';

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path='confession' element={<Confession />} />
				<Route path='misdemeanours' element={<Misdemeanour />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default Router;
