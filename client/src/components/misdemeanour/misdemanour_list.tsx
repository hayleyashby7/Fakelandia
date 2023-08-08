import { MISDEMEANOUR_EMOJIS, Misdemeanour, MisdemeanourWithEmoji } from '../../types/misdemeanours.types';
import Filter_Table from '../table/filter_table';

interface Misdemeanour_ListProps {
	data: unknown | undefined;
}

export const Misdemeanour_List: React.FC<Misdemeanour_ListProps> = ({ data }) => {
	const addEmoji = (misdemeanour: Misdemeanour): MisdemeanourWithEmoji => {
		return {
			citizenId: misdemeanour.citizenId,
			date: misdemeanour.date,
			misdemeanour: misdemeanour.misdemeanour,
			misdemeanourWithEmoji: `${misdemeanour.misdemeanour} ${MISDEMEANOUR_EMOJIS[misdemeanour.misdemeanour]}`,
		};
	};
	if (data) {
		const misdemeanours = Object.entries(data);
		const list = Object.entries(misdemeanours[0][1]).map(([, item]) => addEmoji(item as Misdemeanour));

		return <Filter_Table data={list} />;
	} else {
		return (
			<div>
				<p>No misdemeanours</p>
			</div>
		);
	}
};
