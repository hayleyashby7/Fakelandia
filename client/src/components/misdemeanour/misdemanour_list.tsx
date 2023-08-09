import { Misdemeanour, MisdemeanourKind } from '../../types/misdemeanours.types';
import Filter_Table from '../table/filter_table';
import { randomPunishment } from '../../utils/punishments';

interface Misdemeanour_ListProps {
	data: unknown | undefined;
}

export enum MISDEMEANOUR_EMOJIS {
	rudeness = '🤪',
	vegetables = '🗣',
	lift = '🥗',
	united = '😈',
}

export type MisdemeanourEmoji = (typeof MISDEMEANOUR_EMOJIS)[MisdemeanourKind];

export interface MisdemeanourTableRow extends Misdemeanour {
	misdemeanourWithEmoji: string;
	punishment: string;
}

export enum MISDEMEANOUR_FULL_NAMES {
	rudeness = 'Mild Public Rudeness',
	vegetables = 'Not Eating Your Vegetables',
	lift = 'Speaking in a Lift',
	united = 'Supporting Manchester United',
}

export const Misdemeanour_List: React.FC<Misdemeanour_ListProps> = ({ data }) => {
	const addEmojiAndPunishment = (misdemeanour: Misdemeanour): MisdemeanourTableRow => {
		return {
			citizenId: misdemeanour.citizenId,
			date: misdemeanour.date,
			misdemeanour: misdemeanour.misdemeanour,
			misdemeanourWithEmoji: `${MISDEMEANOUR_FULL_NAMES[misdemeanour.misdemeanour]} ${MISDEMEANOUR_EMOJIS[misdemeanour.misdemeanour]}`,
			punishment: randomPunishment(),
		};
	};

	if (data) {
		const misdemeanours = Object.entries(data);
		const list = Object.entries(misdemeanours[0][1]).map(([, item]) => addEmojiAndPunishment(item as Misdemeanour));

		return <Filter_Table data={list} />;
	} else {
		return (
			<div>
				<p>No misdemeanours</p>
			</div>
		);
	}
};
