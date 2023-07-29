import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/main_layout';
import Home from '../home/home';

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />} />
			<Route index element={<Home />} />
		</Routes>
	);
};

export default Router;
