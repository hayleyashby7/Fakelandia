import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/main_layout';
import Home from '../home/home';
import Confession from '../confession/confession';

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />} />
			<Route index element={<Home />} />
			<Route path='confession' element={<Confession />} />
		</Routes>
	);
};

export default Router;
