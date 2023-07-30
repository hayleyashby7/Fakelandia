import { Misdemeanour } from '../../types/misdemeanours.types';
import Table from '../table/table';

interface Misdemeanour_ListProps {
	data: unknown | undefined;
}

export const Misdemeanour_List: React.FC<Misdemeanour_ListProps> = ({ data }) => {
	if (data) {
		const misdemeanours = Object.entries(data);
		const list = Object.entries(misdemeanours[0][1]).map(([, item]) => item as Misdemeanour);
		
		return <Table data={list} />;
	} else {
		return (
			<div>
				<p>No misdemeanours</p>
			</div>
		);
	}
};
