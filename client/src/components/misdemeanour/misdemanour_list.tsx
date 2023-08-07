import { MISDEMEANOUR_EMOJIS, Misdemeanour, MisdemeanourAndEmoji } from '../../types/misdemeanours.types';
import Table from '../table/table';

interface Misdemeanour_ListProps {
	data: unknown | undefined;
}

export const Misdemeanour_List: React.FC<Misdemeanour_ListProps> = ({ data }) => {
	const addEmoji = (misdemeanour: Misdemeanour): Misdemeanour => {
		return {
			citizenId: misdemeanour.citizenId,
			date: misdemeanour.date,
			misdemeanour: `${misdemeanour.misdemeanour} ${MISDEMEANOUR_EMOJIS[misdemeanour.misdemeanour]}` as MisdemeanourAndEmoji,
		};
	};

	if (data) {
		const misdemeanours = Object.entries(data);
		const list = Object.entries(misdemeanours[0][1]).map(([, item]) => addEmoji(item as Misdemeanour));
		return <Table data={list} />;
	} else {
		return (
			<div>
				<p>No misdemeanours</p>
			</div>
		);
	}
};
