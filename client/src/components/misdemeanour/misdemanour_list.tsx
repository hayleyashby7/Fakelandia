import { Misdemeanour } from '../../types/misdemeanours.types';
import { Misdemeanour_Item } from './misdemeanour_item';

interface Misdemeanour_ListProps {
	data: unknown | undefined;
}

export const Misdemeanour_List: React.FC<Misdemeanour_ListProps> = ({ data }) => {
	if (data) {
		const misdemeanours = Object.entries(data);
		const list: [string, Misdemeanour][] = Object.entries(misdemeanours[0][1]);
		return (
			<ul>
				{list.map(([key, item]) => (
					<Misdemeanour_Item key={key} misdemeanour={item} />
				))}
			</ul>
		);
	} else {
		return (
			<div>
				<p>No misdemeanours</p>
			</div>
		);
	}
};
